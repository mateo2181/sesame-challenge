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
                <Column :title="status.name" :color="getVacancyStatusData(status.name).color"
                    :icon="getVacancyStatusData(status.name).icon" v-for="status in vacancyStatus" :key="status.id">
                    <Candidate
                        v-for="candidate in candidates[status.id]"
                        :key="candidate.id"
                        :candidate="candidate"
                    />
                </Column>
            </div>
        </div>
        <ModalAddCandidate
            v-if="isAddingCandidateModal"
            :vacancyId="vacancyId"
            :statusId="initialVacancyStatus?.id"
            @closeModal="isAddingCandidateModal = false"
        />
    </div>
</template>
<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import InputSearch from '@/components//UI/InputSearch/InputSearch.vue';
import Candidate from './Board/Candidate.vue';
import Column from './Board/Column.vue';
import ModalAddCandidate from './ModalAddCandidate.vue';
import type { CandidatesByStatus } from '@/types';
import type { VacancyStatus } from '@monorepo/core/dist/domain/types';
import { getVacancyStatusData } from '@/constants';
import { useRoute } from 'vue-router';

const route = useRoute();
const vacancyId = route.params.id as string;

const props = defineProps({
    candidates: {
        type: Object as PropType<CandidatesByStatus>,
        default: () => {}
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

const initialVacancyStatus = computed(() => props.vacancyStatus.find(status => status.order === 1))

const isAddingCandidateModal = ref(false);

function searchCandidate(value: string) {
    console.log(value);
}

</script>
