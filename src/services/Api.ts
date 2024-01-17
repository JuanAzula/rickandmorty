import axios from 'axios'
import { type APICharactersResponse } from '../types/charactersType'
import { type APILocationsResponse } from '../types/locationsType'
import { type APIEpisodesResponse } from '../types/episodesType'

// Definimos de qué ruta recogemos los productos
const BASE_URL = 'https://rickandmortyapi.com/api'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class apiService {
  static async getFirstPageCharacters () {
    try {
      const response = await axios.get(BASE_URL + '/character')
      return response.data as APICharactersResponse
    } catch (err) {
      alert('The characters could not be obtaineds')
      return []
    }
  }

  static async getSpecificPageCharacters (page: number) {
    try {
      const response = await axios.get(BASE_URL + '/character' + '?page=' + page)
      return response.data.results as APICharactersResponse['results']
    } catch (err) {
      alert('The characters could not be obtaineds')
      return []
    }
  }

  static async getCharacter (id: number) {
    try {
      const response = await axios.get(BASE_URL + '/character/' + id)
      return response.data as APICharactersResponse
    } catch (err) {
      alert('The character could not be obtained')
      return []
    }
  }

  static async getLocations () {
    try {
      const response = await axios.get(BASE_URL + '/location')
      return response.data as APILocationsResponse
    } catch (err) {
      alert('The locations could not be obtaineds')
      return []
    }
  }

  static async getSpecificPageLocations (page: number) {
    try {
      const response = await axios.get(BASE_URL + '/location' + '?page=' + page)
      return response.data.results as APILocationsResponse['results']
    } catch (err) {
      alert('The locations could not be obtaineds')
      return []
    }
  }

  static async getLocation (id: number) {
    try {
      return (await axios.get(BASE_URL + '/location/' + id)).data as APILocationsResponse
    } catch (err) {
      alert('The location could not be obtained')
      return []
    }
  }

  static async getLocationResidents (url: string) {
    try {
      const response = await axios.get(url)
      return response.data as APICharactersResponse
    } catch (err) {
      alert('The location residents could not be obtaineds')
      return []
    }
  }

  static async getEpisodes () {
    try {
      const response = await axios.get(BASE_URL + '/episode')
      return response.data as APIEpisodesResponse
    } catch (err) {
      alert('The episodes could not be obtaineds')
      return []
    }
  }

  static async getSpecificPageEpisodes (page: number) {
    try {
      const response = await axios.get(BASE_URL + '/episode' + '?page=' + page)
      return response.data.results as APIEpisodesResponse['results']
    } catch (err) {
      alert('The episodes could not be obtaineds')
      return []
    }
  }

  static async getEpisode (id: string) {
    try {
      return (await axios.get(BASE_URL + '/episode/' + id)).data as APIEpisodesResponse
    } catch (err) {
      alert('The episode could not be obtained')
      return []
    }
  }

  static async getEpisodeCharacters (url: string) {
    try {
      const response = await axios.get(url)
      return response.data as APICharactersResponse
    } catch (err) {
      alert('The episode characters could not be obtaineds')
      return []
    }
  }
}

export { apiService }
