<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = withDefaults(defineProps<{
  name: string,
  color?: string,
}>(), {
  color: 'black',
});

const Icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`));

</script>
<template>
  <Icon />
</template>
