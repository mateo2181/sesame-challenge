<template>
    <div class="p-5 border-r h-full flex flex-col gap-8 w-full overflow-x-hidden">
        <Header title="Reclutamiento" :username="user.username" :profilePicture="user.profile" />
        <Tabs>
            <Tab title="Vacantes">
                <VacanciesTab :candidates="candidatesByStatus" :isLoadingStatuses="isLoadingStatuses" :vacancyStatus="vacancyStatus" />
            </Tab>
            <Tab title="Candidatos">Candidatos Tab.</Tab>
        </Tabs>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useVacanciesStore } from '@/stores/vacancies'

import Header from '@/components/UI/Header.vue';
import Tab from '@/components/UI/Tabs/Tab.vue';
import Tabs from '@/components/UI/Tabs/Tabs.vue';
import VacanciesTab from '@/components/Vacancies/VacanciesTab.vue';

const route = useRoute();
const vacancyId = route.params.id as string;
/*
User is hardcoded because Auth is not implemented as part of the challenge.
We can be create a new Pinia store with information about the current user. 
*/
const user = {
    username: 'Mateo',
    profile: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480'
}

const store = useVacanciesStore();
const { candidatesByStatus, isLoadingStatuses, vacancyStatus } = storeToRefs(store);

store.getCandidates(vacancyId);
store.getStatusVacancy(vacancyId);

</script>
<style></style>