<template>
    <form @submit.prevent="validateForm">
        <Modal>
            <template #header>
                <h1 class="mb-2 text-xl font-medium">Añadir Candidato</h1>
            </template>
            <template #body>
                <div class="flex flex-col gap-4 mb-2">
                    <div class="p-4 mb-4 text-violet-800 bg-violet-100 rounded-lg" role="alert">
                        Los campos marcados con asterisco (*) son obligatorios.
                    </div>
                    <Input name="firstName" v-model="firstName" label="Nombre *" placeholder="Nombre" />
                    <Input name="lastName" v-model="lastName" label="Apellido *" placeholder="Apellido" />
                    <Input name="email" v-model="email" label="Correo Electrónico" placeholder="Correo Electrónico" />
                    <Input name="phone" v-model="phone" label="Número de Teléfono" placeholder="Número de Teléfono" />
                    <div class="text-base text-red-600" v-if="error"> {{ error }} </div>
                </div>
            </template>
            <template #footer>
                <div class="flex gap-4 justify-end">
                    <button class="rounded-xl px-4 py-2 text-slate-600 border border-slate-600 hover:bg-slate-100"
                        type="button" @click="$emit('closeModal')"> Cancelar </button>
                    <button
                        :disabled="isAddingCandidate"
                        class="flex items-center gap-1 rounded-xl px-4 py-2 text-white bg-primary hover:bg-violet-600 disabled:bg-violet-200"
                        type="submit">
                        <v-icon v-if="isAddingCandidate" name="ri-loader-4-line" animation="spin" />
                        Confirmar
                    </button>
                </div>
            </template>
        </Modal>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useVacanciesStore } from '@/stores/vacancies';
import Input from '@/components/UI/Input/Input.vue';
import Modal from '@/components/UI/Modal/Modal.vue';

const store = useVacanciesStore();

const { isAddingCandidate, errorAddingCandidate } = storeToRefs(store);

const emit = defineEmits(["closeModal"]);

const props = defineProps({
    vacancyId: {
        type: String,
        required: true
    },
    statusId: {
        type: String,
        default: ''
    }
});

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const error = ref('')

async function validateForm() {
    error.value = '';
    if (!firstName.value || !lastName.value) {
        error.value = 'Por favor complete los campos requeridos.';
        return;
    }
    await store.addCandidate({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        statusId: props.statusId,
        vacancyId: props.vacancyId
    });

    if(!errorAddingCandidate.value) {
        emit('closeModal');
        console.log("Candidate added correctly!");
    }
}

</script>