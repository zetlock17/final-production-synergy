<template>
    <div>
        <h2>Регистрация</h2>
        <label>Введите имя</label>
        <input v-model="userName" v-on:keyup.enter="login"/>
        <button @click="login">Сохранить</button>
    </div>
</template>

<script>
export default {
    name: 'RegistrationView',
    data() {
        return{
            userName: ''
        }
    },
    methods: {
        login() {
            if(this.userName !== '') {
                localStorage.setItem('userName', this.userName)
            }
            else {
                alert('Введите имя')
            }
            
            // this.$router.push({
            //     name: 'profile',
            //     query: {userName: this.userName}
            // })
            this.$router.go(0);
        }
    }
}
</script>

<style scoped>
div {
    font-size: 20px;
}
input {
    margin-left: 10px;
}
</style>