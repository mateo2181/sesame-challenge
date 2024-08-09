<template>
    <header class="flex justify-between items-center h-16">
        <h1 class="text-3xl font-semibold">{{ title }}</h1>
        <img class="border rounded-full w-16" :src="profilePicture" :alt="username">
    </header>
</template>
<script setup lang="ts">
defineProps<{
    title: string,
    username: string,
    profilePicture: string
}>()
</script>