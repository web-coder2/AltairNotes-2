<template>
    <h3>Index Page Altair Notes 2</h3>
</template>


<script>

    export default {
        data() {
            return {
                title: 'index',
                notesList: []
            }
        },
        methods: {
            async fetchData() {
                try {
                    const response = await this.$axios.get('/notes/getAll', {})
                    console.log(response)
                } catch (e) {
                    console.log(e.message)
                }
            }
        },
        async mounted() {
            await this.fetchData()
        }
    }

</script>