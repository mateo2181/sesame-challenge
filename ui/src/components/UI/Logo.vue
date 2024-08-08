<template>
    <div>
        <img class="w-full px-6" :src="logoUrl" :alt="logoTitle">
    </div>
</template>
<script setup lang="ts">
defineProps<{
    logoTitle: string,
    logoUrl: string,
}>()
</script>