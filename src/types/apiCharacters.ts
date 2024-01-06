export interface APICharactersResponse {
    info: Info
    results: Result[]
    forEach: any
    getPage: GetPage
}

export interface GetPage {
    getPage: (page: number) => void

}

export interface Info {
    count: number
    pages: number
    next: string
    prev: null
}

export interface Result {
    id: number
    name: string
    status: Status
    species: Species
    type: string
    gender: Gender
    origin: Location
    location: Location
    image: string
    episode: string[]
    url: string
    created: Date
}

export enum Gender {
    Female = 'Female',
    Male = 'Male',
    Unknown = 'unknown',
}

export interface Location {
    name: string
    url: string
}

export enum Species {
    Alien = 'Alien',
    Human = 'Human',
}

export enum Status {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'unknown',
}
