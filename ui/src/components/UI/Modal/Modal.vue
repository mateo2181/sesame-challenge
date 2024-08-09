<template>
    <div class="relative z-10" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden bg-white text-left shadow-xl rounded-xl transition-all sm:my-8 sm:w-full sm:max-w-lg px-8 py-6">
                    <!-- Modal content -->
                    <slot name="header" />
                    <div v-if="$slots.body" date-testid="modal-body" class="border-t border-gray-200 py-4">
                        <slot name="body" />
                    </div>
                    <div v-if="$slots.footer" date-testid="modal-footer" class="border-t border-gray-200 pt-4">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
