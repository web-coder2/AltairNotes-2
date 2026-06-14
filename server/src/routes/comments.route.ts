import router, { Request, Response, Router } from "express"
import axios from "axios"
import dayjs from "dayjs"

import { createCommentReq, getCommentIdReq } from "../dtos/comments.dto"

import commentsModels from "../models/comments.models"

const commentRouter: Router = router()


commentRouter.post('/create', async (req: Request, res: Response) => {
    try {
        const newCommentData: createCommentReq = req.body
        const newCommentModel = new commentsModels(newCommentData)
        const result = await newCommentModel.save()

        res.status(200).json({ result: result })
    } catch (e: unknown) {
        console.log(`ошибка создания коментария ${e}`)
        res.status(500).json({err: e})
    }
})

commentRouter.post('/like', async (req: Request, res: Response) => {
    try {
        const reqData: getCommentIdReq = req.body

        const result = await commentsModels.findOneAndUpdate(
            { _id: reqData._id },
            { $inc: { likes: 1 } },
            { new: true }
        )

        res.status(200).json({result: `comment ${reqData._id} liked !!! ${result}`})
    } catch (e: unknown) {
        console.log(e)
        res.status(500).json({err: e})
    }
})

export default commentRouter