<template>
    <div class='w-full flex flex-col gap-1'>
        <label :for="name">{{ label }}</label>
        <input :name="name" :id="name" class="px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none bg-slate-50 text-slate-800" type="type" v-model="model"
            :placeholder="placeholder">
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
});

const model = defineModel()

</script>