<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col md:flex-row gap-4 md:items-center justify-start md:justify-between">
            <InputSearch class="md:max-w-72" placeholder="Buscar" @search="searchCandidate" />
            <button class="bg-slate-800 hover:bg-slate-600 rounded-xl text-white text-sm px-4 py-2" @click="isAddingCandidate = true"> Añadir candidato </button>
        </div>
        <div class="flex gap-4 overflow-x-auto pb-2">
            <Column title="New" color="#22C55E" icon="icon-inbox">
                <Candidate
                    :candidate="candidate"
                    creatorEmployee="Mariano Perez"
                    :updatedAt="new Date().toUTCString()"
                />
            </Column>
            <Column title="Interview" color="#14B8A6" icon="icon-user">
            </Column>
            <Column title="Hired" color="#3B82F6" icon="icon-confetti">
            </Column>
        </div>
        <ModalAddCandidate @closeModal="isAddingCandidate = false" v-if="isAddingCandidate" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputSearch from '@/components//UI/InputSearch/InputSearch.vue';
import Candidate from './Board/Candidate.vue';
import Column from './Board/Column.vue';
import ModalAddCandidate from './ModalAddCandidate.vue';

const isAddingCandidate = ref(false);
const candidate = {
    id: '122',
    firstName: 'Mateo',
    lastName: 'Merlo',
    email: 'mateo@gmail.com'
}

function searchCandidate(value: string) { 
    console.log(value);
}
// defineProps<{
// title: string,
// icon: string,
// color: string
// }>()
</script>
