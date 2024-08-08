<template>
    <div class="h-full flex flex-col gap-8">
        <Header title="Reclutamiento" :username="user.username" :profilePicture="user.profile" />
        <Tabs class="h-full">
            <Tab title="Vacantes">
                <Vacancies />
            </Tab>
            <Tab title="Candidatos">Candidatos Tab.</Tab>
        </Tabs>
    </div>
</template>
<script setup lang="ts">
import Header from '@/components/UI/Header.vue';
import Tab from '@/components/UI/Tabs/Tab.vue';
import Tabs from '@/components/UI/Tabs/Tabs.vue';
import Vacancies from '@/components/Vacancies/Vacancies.vue';

/*
User is hardcoded because Auth is not implemented as part of the challenge.
We can be create a new Pinia store with information about the current user. 
*/
const user = {
    username: 'Mateo',
    profile: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480'
}
</script>
<style></style>