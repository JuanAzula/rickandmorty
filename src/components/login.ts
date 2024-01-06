import LoginService from '../services/LoginService'

const handleLogin = async (event: Event, username: string, password: string) => {
  event.preventDefault()
  console.log('THIS IS SUBMIT')
  console.log(username, password)
  try {
    const user = await LoginService.LoginUser({
      username,
      password
    })

    if (user !== null) {
      window.localStorage.setItem(
        'LoggedUser', JSON.stringify(user)
      )
      // if (count < 1) {
      const audio = new Audio('./RickandMorty.mp3')
      audio.volume = 0.04
      audio.play()
      //   count++
      // }
      const login = document.getElementById('login-container')
      login?.classList.replace('card', 'hide-menu')

      const menu = document.getElementById('menu')
      menu?.classList.replace('hide-menu', 'menu-container-home')
    }
    // TokenService.setToken(user.token)
  } catch (e) {
    alert('Wrong credentials')
    const usernameinput = document.getElementById('logusername') as HTMLInputElement
    const passwordinput = document.getElementById('logpassword') as HTMLInputElement
    usernameinput.value = ''
    passwordinput.value = ''
  }
}

export { handleLogin }
