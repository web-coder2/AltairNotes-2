export interface createCommentReq {
    noteId: string,
    parrentCommentId: string | null,
    name: string,
    comment: string,
    likes: number,
    replyLvl: number,
    datedAt: Date
}

export interface getCommentsByNoteReq {
    noteId: string
}

export interface getCommentIdReq {
    _id: string
}