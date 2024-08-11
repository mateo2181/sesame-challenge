<template>
    <div class="w-full flex flex-col gap-6">
        <div class="flex flex-col md:flex-row gap-4 md:items-center justify-start md:justify-between">
            <InputSearch class="md:max-w-72" placeholder="Buscar" @search="searchCandidate" />
            <button class="bg-slate-800 hover:bg-slate-600 rounded-xl text-white text-sm px-4 py-2"
                @click="isAddingCandidateModal = true"> Añadir candidato </button>
        </div>
        <div class="w-full">
            <div class="flex justify-center mt-6" v-if="isLoadingStatuses">
                <v-icon name="ri-loader-4-line" :scale="3" animation="spin" />
            </div>
            <div v-else class="overflow-x-auto flex gap-4 pb-2">
                <Column
                    :title="status.name"
                    :color="getVacancyStatusData(status.name).color"
                    :icon="getVacancyStatusData(status.name).icon" v-for="status in vacancyStatus" :key="status.id"
                    @dragover.prevent
                    @dragenter.prevent
                    @drop="dropItem($event, { toStatusId: status.id })"
                >
                    <Candidate
                        :class="{'bg-gray-100': updatingStatusCandidateId === candidate.id}"
                        draggable="true"
                        @dragstart="pickupItem($event, { fromStatusId: status.id, candidate: candidate })"
                        v-for="candidate in candidates[status.id]" :key="candidate.id" :candidate="candidate" />
                </Column>
            </div>
        </div>
        <ModalAddCandidate v-if="isAddingCandidateModal" :vacancyId="vacancyId" :statusId="initialVacancyStatus?.id"
            @closeModal="isAddingCandidateModal = false" />
    </div>
</template>
<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useVacanciesStore } from '@/stores/vacancies';
import type { VacancyStatus } from '@monorepo/core/dist/domain/types';
import InputSearch from '@/components//UI/InputSearch/InputSearch.vue';
import Candidate from './Board/Candidate.vue';
import Column from './Board/Column.vue';
import ModalAddCandidate from './ModalAddCandidate.vue';
import type { CandidateItem, CandidatesByStatus } from '@/types';
import { getVacancyStatusData } from '@/constants';

const route = useRoute();
const vacancyId = route.params.id as string;

const props = defineProps({
    candidates: {
        type: Object as PropType<CandidatesByStatus>,
        default: () => { }
    },
    vacancyStatus: {
        type: Array<VacancyStatus>,
        default: []
    },
    isLoadingStatuses: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(["updateCandidateStatus"]);

const store = useVacanciesStore();
const { updatingStatusCandidateId } = storeToRefs(store);


const initialVacancyStatus = computed(() => props.vacancyStatus.find(status => status.order === 1))
const isAddingCandidateModal = ref(false);

function searchCandidate(value: string) {
    console.log(value);
}

function dropItem(event: DragEvent, { toStatusId }: { toStatusId: string }) {
    if (event.dataTransfer) {
        const fromStatusId = event.dataTransfer.getData('from-status-id');
        const candidate = JSON.parse(event.dataTransfer.getData('candidate'));
    
        if(fromStatusId !== toStatusId) {
            emit('updateCandidateStatus', { newStatusId: toStatusId, candidate });
        }
    }
}

function pickupItem(event: DragEvent, { fromStatusId, candidate }: { fromStatusId: string, candidate: CandidateItem }) {
    if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData('from-status-id', fromStatusId);
        event.dataTransfer.setData('candidate', JSON.stringify(candidate));
    }
}

</script>
