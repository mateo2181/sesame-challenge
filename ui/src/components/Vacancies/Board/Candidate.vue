<template>
    <div class="flex flex-col gap-3 p-4 border border-slate-200 rounded-xl" data-test="board-column-card">
        <div class="flex items-center justify-between relative">
            <div class="flex-grow text-base font-semibold leading-5 text-slate-800">{{ fullName }}</div>
            <button @click="showMenuOptions = !showMenuOptions" type="button">
                <v-icon name="io-ellipsis-vertical" />
            </button>
            <!-- Menu -->
            <div v-if="showMenuOptions" class="z-10 bg-white absolute top-full right-2 rounded-lg shadow-md w-44">
                <ul class="py-2 text-sm text-gray-700">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Editar candidato</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-xs text-slate-500" v-if="candidate.creatorEmployee"> Añadido por {{ candidate.creatorEmployee
            }}</div>
        <div class="text-xs text-slate-400 flex items-center">
            <v-icon class="mr-2" name="io-time-outline" :scale="0.8" fill="#94a3b8" />
            {{ formatDate(candidate.updatedAt) }}
        </div>
    </div>
</template>
<script setup lang="ts">
import type { CandidateItem } from '@/types';
import { formatDate } from '@/utils/dates';
import { ref } from 'vue';

const props = defineProps<{
    candidate: CandidateItem,
}>()

const showMenuOptions = ref(false);

const fullName = `${props.candidate.firstName} ${props.candidate.lastName}`;

</script>
