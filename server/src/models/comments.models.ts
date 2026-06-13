import { Schema, Types, model } from 'mongoose'
import axios from 'axios'
import dayjs from 'dayjs'

const CommentSchema = new Schema({
    noteId: {
        type: Types.ObjectId,
        ref: 'NotesSchema',
        required: true
    },
    parrentCommentId: {
        type: Types.ObjectId,
        ref: 'CommentSchema',
        default: null
    },
    name: String,
    comment: String,
    likes: Number,
    replyLvl: Number,
    datedAt: Date
})

export default model('CommentSchema', CommentSchema)