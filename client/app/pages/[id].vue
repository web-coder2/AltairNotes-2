<template>
    <h4>Заметка Альтаира - {{ noteId }}</h4>

    <div class="container-fluid mt-5" v-if="noteObject">
        <h3>{{ noteObject.title }}</h3>
        <p>{{ noteObject.description }}</p>
        <div class="mt-3">
            <p class="text-success">{{ noteObject.shortDescription }}</p>
        </div>
        <span>{{ noteObject.date }}</span>
    </div>

</template>


<script>

    export default {
        data() {
            return {
                noteId: null,
                noteObject: null
            }
        },
        methods: {
            async fetchData() {
                try {
                    const response = await fetch(`http://localhost:3000/api/notes/getOne?_id=${this.noteId}`)
                    const jsonData = await response.json()
                    this.noteObject = jsonData.data
                } catch (e) {
                    console.log(e.message)
                }
            }
        },
        async beforeMount() {
            this.noteId = this.$route.params.id
            await this.fetchData()
        }
    }

</script>