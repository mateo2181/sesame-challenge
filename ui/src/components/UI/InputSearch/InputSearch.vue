<template>
    <div class='w-full flex px-4 py-2 items-center gap-4 border border-slate-200 rounded-xl bg-slate-50'>
        <v-icon class="" name="io-search-outline" />
        <input class="w-full text-sm block flex-grow focus:outline-none bg-transparent text-slate-800" type="search" v-model="inputModel"
            :placeholder="placeholder" @keyup.enter="handleSearch">
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
});

const emit = defineEmits(["search"]);
const inputModel = ref("");

function handleSearch() {
    emit("search", inputModel.value);
}

</script>