<template>
    <ul class="p-4" :class="{ 'bg-slate-50 rounded-md': isExpanded }" :aria-label="itemMenu.name">
        <!-- <li v-for="(item, i) in itemMenu.children" :key="`${i}_${item.name}`"> -->
        <template v-if="itemMenu.children.length > 0">
            <li @click="isExpanded = !isExpanded" class="flex justify-between gap-2 items-center">
                <span class="cursor-pointer text-lg flex items-center"
                      :class="{ 'text-primary': itemMenu.children.find(item => item.link === activeRoute), 'uppercase text-slate-600 text-base': depth === 0 }">
                    <v-icon class="mr-2" v-if="itemMenu.icon" :name="itemMenu.icon" />
                    {{ itemMenu.name }}
                </span>
                <v-icon v-if="!isExpanded" name="io-chevron-down" />
                <v-icon v-else name="io-chevron-up" />
            </li>
            <SidebarMenu v-show="isExpanded" v-for="item in itemMenu.children" :key="item.name" :itemMenu="item"
                    :activeRoute="activeRoute" :depth="depth + 1"/>
        </template>
        <li v-else>
            <RouterLink class="pl-2 text-lg"
                :class="{ 'font-medium border-l-2 border-primary text-primary': itemMenu.link === activeRoute }" :to="itemMenu.link">
                {{ itemMenu.name }}
            </RouterLink>
        </li>
        <!-- </li> -->
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { SidebarItem } from '@/types'

defineProps<{
    itemMenu: SidebarItem,
    activeRoute: string,
    depth: number
}>()

const isExpanded = ref(false)

</script>