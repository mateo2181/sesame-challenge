<template>
    <div class="flex flex-col gap-3 p-4 border border-slate-200 rounded-xl">
        <div class="text-base font-semibold leading-5 text-slate-800">{{ fullName }}</div>
        <div class="text-xs text-slate-500" v-if="candidate.creatorEmployee"> Añadido por {{ candidate.creatorEmployee }}</div>
        <div class="text-xs text-slate-400 flex items-center">
            <v-icon class="mr-2" name="io-time-outline" :scale="0.8" fill="#94a3b8" />
            {{ formatDate(candidate.updatedAt) }}
        </div>
    </div>
</template>
<script setup lang="ts">
import type { CandidateItem } from '@/types';
import { formatDate } from '@/utils/dates';

const props = defineProps<{
    candidate: CandidateItem,
}>()

const fullName = `${props.candidate.firstName} ${props.candidate.lastName}`
</script>
