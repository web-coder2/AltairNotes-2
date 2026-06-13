import express, { Express } from "express"
import bodyParser from "body-parser"
import axios from "axios"
import dayjs from "dayjs"
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from "mongoose"


import notesRouter from "./routes/notes.route"

dotenv.config()

const port: number = 3000
const app: Express = express()

const MONGO_URL = process.env.DATABASE_URL
const MONGO_USER = process.env.DATABASE_USERNAME
const MONGO_PASS = process.env.DATABASE_PASSWORD
const MONGO_PORT = process.env.DATABASE_PORT
const DATABASE_NAME = process.env.DATABASE_NAME

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

// ПОДКЛЮЧЕНИЕ МОДУЛЕЙ
app.use('/api/notes', notesRouter)

async function startConnectToDB() {
    try {
        const uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}:${MONGO_PORT}/${DATABASE_NAME}?authSource=admin`
        await mongoose.connect(uri)
        console.log('подключение к mongoDB успешно !!')
    } catch (err: unknown) {
        console.log(`ошибка с подключением к mongoDB ${err}`)
    }
}

app.listen(port, () => {
    startConnectToDB()
    console.log(`app has been running http://localhost:${port}`)
})