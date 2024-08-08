import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoStarOutline, IoChevronUp, IoChevronDown, IoTimeOutline, IoSearchOutline } from "oh-vue-icons/icons";
addIcons(IoStarOutline, IoChevronUp, IoChevronDown, IoTimeOutline, IoSearchOutline);


const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
