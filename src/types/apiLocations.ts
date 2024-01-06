export interface APILocationsResponse {
    info: Info
    results: Result[]
    forEach: any
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
    type: string
    dimension: string
    residents: string[]
    url: string
    created: Date
}
