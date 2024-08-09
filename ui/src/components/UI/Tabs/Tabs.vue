<template>
    <div class="bg-white rounded-2xl shadow-sm py-3 px-6">
        <ul class="flex border-b border-slate-200 px-4">
            <li v-for="(tab) in tabTitles" :key="tab.title"
                class="py-2 px-4 text-lg cursor-pointer"
                :class="[tab.title === selectedTab ? 'text-primary border-b-2 border-primary font-semibold' : 'text-slate-400']" @click="selectTab(tab.title)">
                {{ tab.title }}
            </li>
        </ul>
        <div class="py-6">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, provide, readonly, ref, useSlots } from 'vue';

const selectedTab = ref<string>('')

const slots = useSlots()
const children = slots.default ? slots.default() : [];

const tabTitles = ref(children.flatMap((tab) => tab.props !== null ? tab.props : []))

function selectTab(title: string) {
    selectedTab.value = title;
}

onMounted(() => {
    selectTab(tabTitles.value[0].title)
})

provide('selectedTab', readonly(selectedTab))

</script>
