<template>
    <h3 class="mb-4">Главная вкладка с метками Альтаира</h3>

    <div class="mt-5 d-flex d-flex">

        <div v-if="notesList.length > 0">
            <h4>Все метки Альтаира</h4>
            <div class="cards-container mt-3 col-sm-4">
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

        <div class="col-sm-4 offset-sm-2">
          <h4>Создать новую заметку</h4>
          <div class="form-horizontal">
            
            <div class="form-group mb-3">
              <input class="form-control" v-model="createNote.title" placeholder="Название метки">
            </div>

            <div class="form-group mb-3">
              <input class="form-control" v-model="createNote.shortDescription" placeholder="малое описание">
            </div>

            <div class="form-group mb-3">
              <textarea class="form-control" v-model="createNote.description" placeholder="Полное описание" />
            </div>

            <div class="form-group mb-3">
              <input class="form-control" v-model="createNote.date" placeholder="Дата мисии">
            </div>

            <div class="form-group">
              <button @click="createNoteAction" class="btn btn-dark">Создать</button>
            </div>

          </div>
        </div>


    </div>

</template>

<script>

export default {
  data() {
    return {
      notesList: [],
      createNote: {
        title: 'убить Робера',
        shortDescription: 'последнияя цель Альтаира',
        description: 'тогда Альтаир пошел в Арсуф и убил там Робера',
        date: '1190',
        isReaded: false
      }
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
    async createNoteAction() {
      try {
        const result = await fetch('http://localhost:3000/api/notes/create', {
          method: 'POST',
          body: JSON.stringify({
            createNote: this.createNote
          })
        })
        await this.fetchData()
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