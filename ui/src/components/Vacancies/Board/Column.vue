<template>
    <div class="flex flex-col gap-4 p-4 border border-slate-200 rounded-xl w-72 flex-shrink-0 min-h-40" data-test="board-column">
        <div class="h-1 w-full rounded-full" :style="{backgroundColor: color}"></div>
        <div class="flex gap-2 items-center">
            <SVGIcon class="w-6 h-6" :name="icon" />
            <span class="font-semibold text-base leading-5">{{ title }}</span>
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">
import SVGIcon from '@/components/UI/SVGIcon.vue';

defineProps<{
    title: string,
    icon: string,
    color: string
}>()
</script>
