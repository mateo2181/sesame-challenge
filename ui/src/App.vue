<template>
  <Layout>
    <template #sidebar>
        <Sidebar :itemsMenu="SIDEBAR_MENU_ITEMS" :activeRoute="activeRoute" />
    </template>
    <template #main>
      <RouterView />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import Layout from '@/components/Layout.vue';
import Sidebar from '@/components/UI/Sidebar/Sidebar.vue';
import { SIDEBAR_MENU_ITEMS } from '@/constants'

const route = useRoute()
const activeRoute = ref(route.path)

watch(
  () => route.path,
  path => activeRoute.value = path
)

</script>

<style scoped>
</style>
