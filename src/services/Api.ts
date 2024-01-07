import axios from 'axios'
import { type APICharactersResponse } from '../types/apiCharacters'
import { type APILocationsResponse } from '../types/apiLocations'
import { type APIEpisodesResponse } from '../types/apiEpisodes'

// Definimos de qué ruta recogemos los productos
const BASE_URL = 'https://rickandmortyapi.com/api'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class apiService {
  static async getFirstPageCharacters () { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/character') // recogemos la response del servidor
      return response.data as APICharactersResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getSpecificPageCharacters (page: number) { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/character' + '?page=' + page) // recogemos la response del servidor
      return response.data.results as APICharactersResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getCharacter (id: number) { // a través de la función getproductos por id, mostramos el producto con el id recibido
    try {
      const response = await axios.get(BASE_URL + '/character/' + id)
      return response.data as APICharactersResponse
    } catch (err) {
      alert('The character could not be obtained')
      return []
    }
  }

  static async getLocations () { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/location') // recogemos la response del servidor
      return response.data as APILocationsResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The locations could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getSpecificPageLocations (page: number) { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/location' + '?page=' + page) // recogemos la response del servidor
      return response.data.results as APILocationsResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The locations could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getLocation (id: number) { // a través de la función getproductos por id, mostramos el producto con el id recibido
    try {
      return (await axios.get(BASE_URL + '/location/' + id)).data as APILocationsResponse
    } catch (err) {
      alert('The location could not be obtained')
      return []
    }
  }

  static async getLocationResidents (url: string) {
    try {
      const response = await axios.get(url) // recogemos la response del servidor
      return response.data as APICharactersResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The location residents could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getEpisodes () { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/episode') // recogemos la response del servidor
      return response.data as APIEpisodesResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The episodes could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getSpecificPageEpisodes (page: number) { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/episode' + '?page=' + page) // recogemos la response del servidor
      return response.data.results as APIEpisodesResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The episodes could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getEpisode (id: string) { // a través de la función getproductos por id, mostramos el producto con el id recibido
    try {
      return (await axios.get(BASE_URL + '/episode/' + id)).data as APIEpisodesResponse
    } catch (err) {
      alert('The episode could not be obtained')
      return []
    }
  }

  static async getEpisodeCharacters (url: string) {
    try {
      const response = await axios.get(url) // recogemos la response del servidor
      return response.data as APICharactersResponse // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The episode characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }
}

export { apiService }
