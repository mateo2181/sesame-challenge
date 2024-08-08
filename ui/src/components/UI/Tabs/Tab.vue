<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { inject, ref, watch } from 'vue';

const props = defineProps<{title: string}>()

const isActive = ref(false)

const selectedTab = ref(inject('selectedTab'))


watch(selectedTab, (newValue, _) => {
    isActive.value = newValue === props.title;
})
</script>
