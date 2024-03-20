export interface Note {
    _id: string
    content: string
    author: string
    tags: Array<string>
    authorSlug: string
    length: number
    dateAdded: string
    dateModified: string
    isFavorite?: boolean
}