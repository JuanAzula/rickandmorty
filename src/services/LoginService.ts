import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/login'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class LoginService {
  static async LoginUser (logindata: { username: string, password: string }) {
    const respuesta = await axios.post('http://localhost:3002/api/login', logindata, {
      headers: { 'Content-Type': 'application/json' }
    })
    return respuesta.data
  }
}
