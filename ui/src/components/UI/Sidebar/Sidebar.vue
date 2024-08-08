<template>
    <nav>
        <SidebarMenu v-for="item in itemsMenu" :key="item.name" :itemMenu="item" :activeRoute="activeRoute" :depth="0" />
    </nav>
</template>
<script setup lang="ts">
import type { SidebarItem } from '@/types'
import SidebarMenu from './SidebarMenu.vue';

defineProps<{
    itemsMenu: Array<SidebarItem>,
    activeRoute: string
}>()
</script>