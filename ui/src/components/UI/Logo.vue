<template>
    <div class="border-b md:border-b-0 pb-4">
        <img class="w-48 mx-auto md:w-full px-6" :src="logoUrl" :alt="logoTitle">
    </div>
</template>
<script setup lang="ts">
defineProps<{
    logoTitle: string,
    logoUrl: string,
}>()
</script>