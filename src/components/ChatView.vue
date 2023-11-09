<template>
    <div v-if="userName" class="chat">
        <div class="chat">
            <h2>Чат</h2>
            <div class="text" v-for="msg in msgs" :key="msg.id">
                {{ msg.user }}: {{ msg.text }}
            </div>
            <div v-show="emptyMsg" class="empty">
                Сообщений нет
            </div>
        </div>
        <input v-model="newMsg" placeholder="Введите сообщение" v-on:keyup.enter="sendMsg"/>
        <button @click="sendMsg">Отправить</button>
        <button @click="delMsgs">Удалить</button>
    </div>
    <div v-else>
        <RegistrationView/>
    </div>
</template>

<script>
    import RegistrationView from './RegistrationView.vue';

    export default {
        name: 'ChatView',
        data (){
            return {
                msgs: [],
                newMsg: '',
                emptyMsg: true,
                userName: this.userName = localStorage.getItem('userName')
            }
        },
        components: {
            RegistrationView,
        }, 
        methods: {
            sendMsg() {
                if(this.newMsg !== '') {
                    this.emptyMsg = false
                    this.msgs.push({id: new Date().getTime(), user: this.userName, text: this.newMsg})
                    this.saveChatRecords()
                    this.newMsg = ''
                } 
                else {
                    alert('Введите сообщение')
                }
            },
            saveChatRecords(){
                const records = this.msgs
                localStorage.setItem(`msgs_${this.userName}`, JSON.stringify(records))
            },
            delMsgs(){
                this.msgs = []
                localStorage.removeItem(`msgs_${this.userName}`)
                this.emptyMsg = true
            }
        },
        created() {
            if(localStorage.getItem(`msgs_${this.userName}`)) {
                this.msgs = JSON.parse(localStorage.getItem(`msgs_${this.userName}`))
                this.emptyMsg = false
            }
            else {
                this.emptyMsg = true
            }
            // if(this.msgs) {
            //     this.emptyMsg = false
            // } 
            // else {
            //     this.emptyMsg = true
            // }
        }

    }
    
</script>

<style scoped>
.text {
    background-color: #A1F0E5;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 20px;
}
</style>