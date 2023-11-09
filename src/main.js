import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import ChatView from './components/ChatView.vue'
import ApiView from './components/ApiView.vue'
// import RegistrationView from './components/RegistrationView.vue'
import ProfileView from './components/ProfileView.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/chat', 
            name: 'chat',
            component: ChatView,
        },
        {
            path: '/api',
            name: 'api',
            component: ApiView,
        },
        // {
        //     path: '/registration',
        //     name: 'registration',
        //     component: RegistrationView
        // }
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView,
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
