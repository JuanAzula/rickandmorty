export interface APIEpisodesResponse {
  info: InfoEpisodes
  results: ResultEpisodes[]
  forEach: any
}

export interface InfoEpisodes {
  count: number
  pages: number
  next: string
  prev: null
}

export interface ResultEpisodes {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: Date
}
