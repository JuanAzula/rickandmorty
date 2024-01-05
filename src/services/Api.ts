import axios from 'axios'

// Definimos de qué ruta recogemos los productos
const BASE_URL = 'https://rickandmortyapi.com/api'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class apiService {
  static async getFirstPageCharacters () { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/character') // recogemos la response del servidor
      return response.data // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getSpecificPageCharacters (page: number) { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/character' + '?page=' + page) // recogemos la response del servidor
      return response.data.results // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getCharacter (id: number) { // a través de la función getproductos por id, mostramos el producto con el id recibido
    const response = await axios.get(BASE_URL + '/character/' + id)
    return response.data
  }

  static async getLocations () { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/location') // recogemos la response del servidor
      return response.data // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getSpecificPageLocations (page: number) { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/location' + '?page=' + page) // recogemos la response del servidor
      return response.data.results // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getLocation (id: number) { // a través de la función getproductos por id, mostramos el producto con el id recibido
    return (await axios.get(BASE_URL + '/location/' + id)).data
  }

  static async getLocationResidents (url: string) {
    try {
      const response = await axios.get(url) // recogemos la response del servidor
      return response.data // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getEpisodes () { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/episode') // recogemos la response del servidor
      return response.data // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getSpecificPageEpisodes (page: number) { // static para que se pueda llamar a la función getproductos sin estar dentro de la clase
    try {
      const response = await axios.get(BASE_URL + '/episode' + '?page=' + page) // recogemos la response del servidor
      return response.data.results // .data es un método de axios para pasar los productos a json
    } catch (err) {
      alert('The characters could not be obtaineds') // alerta de error preparada en caso de no haber obtenido los productos
      return []
    }
  }

  static async getEpisode (id: string) { // a través de la función getproductos por id, mostramos el producto con el id recibido
    return (await axios.get(BASE_URL + '/episode/' + id)).data
  }
}

export { apiService }
