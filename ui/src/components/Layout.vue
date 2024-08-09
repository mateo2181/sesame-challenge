<template>
    <div class="min-h-dvh w-full container flex flex-col md:flex-row bg-gray-100">
        <aside class="bg-white p-4 shadow-sm w-full md:w-64">
            <Logo logoTitle="The Challenge" logoUrl="/logo.jpg" />
            <div class="mt-4">
                <slot name="sidebar"></slot>
            </div>
        </aside>
        <main class="flex-grow p-5 border-r border-gray-200 w-full">
            <slot name="main"></slot>
        </main>
    </div>
</template>
<script setup lang="ts">
import Logo from '@/components/UI/Logo.vue'
</script>
