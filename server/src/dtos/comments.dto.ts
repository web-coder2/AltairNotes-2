export interface createCommentReq {
    noteId: string,
    parrentCommentId: string | null,
    name: string,
    comment: string,
    likes: 0,
    replyLvl: 0,
    datedAt: Date
}

export interface getCommentsByNoteReq {
    noteId: string
}