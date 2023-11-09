<template>
    <div>
        <h2>Игроки</h2>
        <div v-if="isLoad">Загрузка...</div>
        <div v-else>
            <div v-for="el in data" :key='el.id'>
                {{ el.id }}. {{ el.first_name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weatherApi',
    data() {
        return{
            isLoad: true,
            data: []
        }
    },
    mounted(){
        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            params: {
                page: '0',
                per_page: '25'
            },
            headers: {
                'X-RapidAPI-Key': 'c3f20ef55dmshcbb5e4417de07d3p12bec6jsnc20b34027d5a',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };
        fetch(options.url, options)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res)
            this.data = res.data
            this.isLoad = false
        })
    }
}

</script>