<template>
    <h3 class="mb-4">Главная вкладка с метками Альтаира</h3>

    <div class="mt-5">
        <div v-if="notesList.length > 0">
            <h4>Все метки Альтаира</h4>

            <div class="cards-container mt-3">
                <div v-for="(note, idx) in notesList" class="card" style="width:400px">
                    <div class="card-body">
                        <h4 class="card-title">{{ note.title }}</h4>
                        <p class="card-text">{{ note.shortDescription }}</p>
                        <div class="d-flex justify-content-between">
                            <div>
                                <router-link class="btn btn-dark" :to="note._id">прочитать</router-link>
                            </div>
                            <div>
                                <span>{{ note.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div></div>
    </div>

</template>

<script>

export default {
  data() {
    return {
      notesList: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/notes/getAll')
        const json = await response.json()
        this.notesList = json.data
        console.log(this.notesList)
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  async mounted() {
    await this.fetchData()
  },
}
</script>