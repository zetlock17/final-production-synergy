<template>
    <div v-if="userName">
        <div class="new-post">
            <label>Новая запись</label>
            <input v-model="newPost" placeholder="Введите текст" v-on:keyup.enter="sendPost"/>
            <button @click="sendPost">Опубликовать</button>
        </div>
        <div v-for="post in posts" :key="post.id">
            <section class="post">
                <span>{{ post.user }}: {{ post.text }}</span>
                <div>
                    Лайков: {{ post.usersLiked.length }}
                    <button @click="like(post.id)">+</button>
                    Дизлайков: {{ post.usersDisliked.length }}
                    <button @click="dislike(post.id)">-</button>
                </div>
                <div>
                    <button @click="showCom(post.id)">Комментарии</button>
                    <div v-show="post.showComments">
                        <div>
                            <label>Новый комментарий</label>
                            <input v-model="newComment" placeholder="Введите текст" v-on:keyup.enter="sendComment(post.id)"/>
                            <button @click="sendComment(post.id)">Опубликовать</button>
                         </div>
                         <div v-for="comment in post.comments" :key="comment.user">
                            {{ comment.user }}: {{ comment.text }}
                         </div>
                    </div>
                </div>
            </section>
        </div>
        <div v-show="emptyPost" class="empty">
            Постов нет
        </div>
    </div>
    <div v-else>
        <RegistrationView/>
    </div>
</template>

<script>
import RegistrationView from './RegistrationView.vue';

export default {
    name: 'HomeView',
    data() {
        return {
            newPost: '',
            userName: this.userName = localStorage.getItem('userName'),
            posts: [],
            emptyPost: true,
            newComment: '',
            // comments: []
        }
    },
    methods: {
        sendPost() {
            if (this.newPost) {
                this.posts.unshift({id: new Date().getTime(), user: this.userName, text: this.newPost, showComments: false, comments: [], usersLiked: [], usersDisliked: []})
                localStorage.setItem('posts', JSON.stringify(this.posts))
                this.newPost = ''
                this.emptyPost = false
            } else {
                alert('Вы не ввели текст')
            }
        },
        like(id) {
            this.posts.map((post) => {
                if(post.id === id){
                    if(post.usersLiked.includes(this.userName)) {
                        // console.log('del');
                        post.usersLiked = post.usersLiked.filter((user) => user != this.userName)
                    } else {
                        // console.log('add')
                        post.usersLiked.push(this.userName)
                        post.usersDisliked = post.usersDisliked.filter((user) => user != this.userName)
                    }
                    // post.usersLiked.map((user) => {
                    //     console.log(user);
                    //     if(user === this.userName) {
                    //         post.likes -= 1
                    //         delete post.usersLiked(this.userName)
                    //     } else {
                    //         post.likes += 1
                    //         post.usersLiked.push(this.userName)
                    //     }
                    // })
                    // post.likes += 1
                    // post.usersLiked.push(this.userName)
                    // if(this.userName in post.usersLiked) {
                    //     delete post.usersLiked(this.userName)
                    //     console.log('del');
                    // } else {
                    //     post.usersLiked.push(this.userName)
                    //     console.log('add');
                    // }
                    // if(!post.usersLiked){
                    //     post.usersLiked.push(this.userName)
                    //     console.log('add');
                    // } else {
                    //     for (let user of post.usersLiked) {
                    //         console.log('for');
                    //         if(user === this.userName){
                    //             delete post.usersLiked(this.userName)
                    //             console.log('del');
                    //         } else {
                    //             post.usersLiked.push(this.userName)
                    //             console.log('add');
                    //         }
                    //     }
                    // }
                    localStorage.setItem('posts', JSON.stringify(this.posts))
                }
            });
        },
        dislike(id) {
            this.posts.map((post) => {
                if(post.id === id){
                    if(post.usersDisliked.includes(this.userName)) {
                        // console.log('del');
                        post.usersDisliked = post.usersDisliked.filter((user) => user != this.userName)
                    } else {
                        // console.log('add')
                        post.usersDisliked.push(this.userName)
                        post.usersLiked = post.usersLiked.filter((user) => user != this.userName)
                    }
                }
            });
        },
        showCom(id) {
            this.posts.map((post) => {
                if(post.id === id){
                    post.showComments = !post.showComments
                    localStorage.setItem('posts', JSON.stringify(this.posts))
                } else {
                    post.showComments = false
                }
            })
        },
        sendComment(id){
            if(this.newComment !== '') {
                this.posts.map((post) => {
                    if(post.id === id){
                        post.comments.unshift({user: this.userName, text: this.newComment})
                        localStorage.setItem('posts', JSON.stringify(this.posts))
                    }
                })
                this.newComment = ''
            } else {
                alert('Введите текст комментария')
            }
        }
    },
    components: {
        RegistrationView,
    }, 
    created() {
        if(localStorage.getItem('posts')){
            this.posts = JSON.parse(localStorage.getItem('posts'))
            this.emptyPost = false
        } else {
            this.emptyPost = true
        }
        // this.posts = this.posts.reverse()
    },
    // computed() {
    //     this.posts = this.posts.reverse()
    // }
}
</script>

<style scoped>
.post {
    width: 100%;
    background-color: #A1F0E5;
    margin-bottom: 20px;
    border-radius: 10px;
}
.post > span {
    font-size: 20px;
}
.new-post {
    margin-bottom: 15px;
    font-size: 25px;
}
.new-post > input {
    margin-left: 10px;
}

</style>