import router, { Request, Response, Router } from "express"
import axios from "axios"
import dayjs from "dayjs"

import { createNote, allNotes, filterNote, fullNote } from "../dtos/notes.dto"
import { createCommentReq } from "../dtos/comments.dto"

import notesModels from "../models/notes.models"
import commentsModels from "../models/comments.models"

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

notesRouter.get('/getAll', async (req: Request, res: Response) => {
    try {
        const allNotesData: allNotes[] = await notesModels.find().select('-description')
        res.status(200).json({ data: allNotesData })
    } catch (e: unknown) {
        console.log(`ошибка получения всех записей ${e}`)
        res.status(500).json({ err: e })
    }
})

notesRouter.get('/getOne', async (req: Request, res: Response) => {
    try {
        const queryFilter = req.query as unknown as filterNote

        const filterNote: fullNote | null = await notesModels.findOne({_id: queryFilter._id})

        const commentsByNote = await commentsModels.find({noteId: filterNote?._id})
        const prepaidComements: createCommentReq[] = []

        commentsByNote.forEach((comment) => {
            prepaidComements.push({
                noteId: comment.noteId.toString(),
                parrentCommentId: comment?.parrentCommentId?.toString() ?? null,
                name: comment.name?.toString() ?? '',
                comment: comment.comment?.toString() ?? '',
                likes: comment.likes ?? 0,
                replyLvl: comment.replyLvl ?? 0,
                datedAt: comment?.datedAt ? new Date(comment.datedAt) : new Date()
            })
        })

        if (filterNote) {
            filterNote.comments = prepaidComements
        }

        res.status(200).json({ data: filterNote })
    } catch (e: unknown) {
        console.log(`ошибка получения записи ${e}`)
        res.status(500).json({ err: e })
    }
})

export default notesRouter