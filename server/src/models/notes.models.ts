import { Schema, model } from "mongoose"
import axios from "axios"
import dayjs from "dayjs"

const NotesSchema = new Schema({
    title: String,
    shortDescription: String,
    description: String,
    date: String,
    isReaded: Boolean
})

export default model('NotesSchema', NotesSchema)