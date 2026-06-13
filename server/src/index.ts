import express, { Express } from "express"
import bodyParser from "body-parser"
import axios from "axios"
import dayjs from "dayjs"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()

const port: number = 3000
const app: Express = express()

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.listen(port, () => {
    console.log(`app has been running http://localhost:${port}`)
})