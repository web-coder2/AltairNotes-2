export interface createNote {
    title: string,
    shortDescription: string,
    description: string,
    date: string,
    isReaded: boolean
}

export interface allNotes {
    _id: string,
    title: string,
    shortDescription: string,
    date: string,
    isReaded: boolean
}

export interface filterNote {
    _id: string,
}

export interface fullNote extends allNotes {
    description: string,
}