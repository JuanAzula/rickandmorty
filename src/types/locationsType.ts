export interface APILocationsResponse {
  info: InfoLocations
  results: ResultLocations[]
}

export interface InfoLocations {
  count: number
  pages: number
  next: string
  prev: null
}

export interface ResultLocations {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: Date
}
