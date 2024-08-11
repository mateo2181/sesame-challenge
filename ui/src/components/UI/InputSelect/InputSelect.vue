<template>
    <div class='w-full flex flex-col gap-1'>
        <label :for="name">{{ label }}</label>
        <select :name="name" :id="name" class="px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none bg-slate-50 text-slate-800" v-model="model">
            <option class="text-slate-400" disabled value="">{{ placeholder }}</option>
            <option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
    </div>
</template>
<script setup lang="ts">

interface Option {
    value: string | number,
    label: string
}

defineProps({
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
    options: {
        type: Array<Option>,
        required: true
    }
});

const model = defineModel()

</script>