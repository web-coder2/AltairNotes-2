export interface createNote {
    title: string,
    shortDescription: string,
    description: string,
    date: string,
    isReaded: boolean
}

export interface allNotes {
    title: string,
    shortDescription: string,
    date: string,
    isReaded: boolean
}

export interface filterNote {
    _id: string,
    title: string
}

export interface fullNote extends allNotes {
    description: string
}