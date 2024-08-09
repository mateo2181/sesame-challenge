<template>
    <div class="h-screen container mx-auto flex flex-col md:flex-row bg-gray-100">
        <aside class="bg-white p-4 shadow-sm w-full md:w-64 flex-shrink-0">
            <Logo logoTitle="The Challenge" logoUrl="/logo.jpg" />
            <div class="mt-2">
                <slot name="sidebar"></slot>
            </div>
        </aside>
        <slot name="main"></slot>
    </div>
</template>
<script setup lang="ts">
import Logo from '@/components/UI/Logo.vue'
</script>
