import router, { Request, Response, Router } from "express"
import axios from "axios"
import dayjs from "dayjs"

import { createNote } from "../dtos/notes.dto"
import notesModels from "../models/notes.models"

const notesRouter: Router = router()

notesRouter.post('/create', async (req: Request, res: Response) => {
    try {
        const newNote: createNote = req.body
        const newNoteModel = new notesModels(newNote)
        const result = await newNoteModel.save()
        res.status(200).json({ result: result })
    } catch (e: unknown) {
        console.log(`ошибка созадния новой записи ${e}`)
        res.status(500).json({ err: e })
    }
})

export default notesRouter