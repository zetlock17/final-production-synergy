<template>
    <div class="nav">
        <nav class="transition">
            <router-link :to='{name: "home"}'>Лента</router-link>
            <router-link :to='{name: "chat"}'>Чат</router-link>
            <router-link :to='{name: "api"}'>Игроки</router-link>
            <router-link :to='{name: "profile"}'>Профиль</router-link>
        </nav>
    </div>
</template>

<style scoped>
.nav {
    margin-bottom: 15px;
    background-color: #BDE6F0;
    display: flex;
    justify-content: space-around;
    /* height: 30px; */
}
.nav > nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
/* nav > div {
    padding: 7px 5px;
    border-radius: 10px;
    /* background-color: black; */
    /* width: 100%; */

/* .nav > div:hover {
    background-color: #A1F0E5;
} */
/* :root {
    --main-bg-color: #BDE6F0;
} */
a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    display: block;
    padding: 7px 5px;
    border-radius: 10px;
    /* margin: 7px 0; */
}
a:hover {
    background-color: #8498F0;
}
.transition > a{
  transition: 0.5s;
}
</style>