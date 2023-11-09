<template>
    <div>
        <div v-if="userName">
            <p>Имя профиля: {{ userName }}</p>
            <button @click="logout">Выйти из профиля</button>
        </div>
        <div v-else>
            <RegistrationView/>
        </div>
    </div>
</template>

<script>
import RegistrationView from './RegistrationView.vue';

export default {
    name: 'ProfileView',
    data() {
        return {
            userName: '', // потом дописать получение из local storage 
        }
    },
    components: { RegistrationView },
    methods: {
        logout() {
            this.userName = ''
            localStorage.removeItem('userName')
        }
    },
    created() {
        if(localStorage.getItem('userName')) {
            this.userName = localStorage.getItem('userName')
        }
    }
}
</script>

<style scoped>
div {
    font-size: 20px;
}
</style>