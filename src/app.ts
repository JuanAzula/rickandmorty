import './styles.css'
import { changeCharPage } from './handlePagination/charPagination'
import { changeEpisodePage } from './handlePagination/episodePagination'
import { changeLocationPage } from './handlePagination/locationPagination'
import { handleSection } from './components/menu'
import { handleLogin } from './components/login'
import { searchFunction } from './components/searchbar'

// const user = window.localStorage.getItem('LoggedUser')
// if (user !== null) {
//   const login = document.getElementById('login-container')
//   login?.classList.replace('card', 'menu--hide')
//   const menu = document.getElementById('menu')
//   menu?.classList.replace('menu--hide', 'menu-container--home')
// }

// ///////// HANDLE LOGIN ///////

const loginForm = document.getElementById('card__form')
const usernameinput = document.getElementById('logusername') as HTMLInputElement
const passwordinput = document.getElementById('logpassword') as HTMLInputElement

if (loginForm !== null && loginForm instanceof HTMLFormElement) {
  loginForm.addEventListener('submit', (event: Event) => {
    event.preventDefault()
    const username = usernameinput?.value
    const password = passwordinput?.value
    handleLogin(event, username, password)
  })
}

// ////// HANDLE MENU BUTTONS /////
const buttons = document.querySelectorAll('#menu .menu__button')

buttons.forEach(button => {
  button.addEventListener('click', (handleSection as EventListener))
})

// ///////// HANDLE CHARACTERS PAGINATION //////
const charLis = document.querySelectorAll('#charactersPagination li')

charLis.forEach(li => {
  li.addEventListener('click', function (this: HTMLElement) {
    const value = this.querySelector('a')?.getAttribute('value')
    changeCharPage((value != null) ? Number(value) : 1)
  })
})

// ///////// HANDLE EPISODES PAGINATION //////
const episodeLis = document.querySelectorAll('#episodesPagination li')

episodeLis.forEach(li => {
  li.addEventListener('click', function (this: HTMLElement) {
    const value = this.querySelector('a')?.getAttribute('value')
    changeEpisodePage((value != null) ? Number(value) : 1)
  })
})

// ///////// HANDLE LOCATIONS PAGINATION //////
const locationLis = document.querySelectorAll('#locationPagination li')

locationLis.forEach(li => {
  li.addEventListener('click', function (this: HTMLElement) {
    const value = this.querySelector('a')?.getAttribute('value')
    changeLocationPage((value != null) ? Number(value) : 1)
  })
})

// /////// HANDLE SEARCHBAR //////
const searchbar = document.getElementById('searchbar')

searchbar?.addEventListener('keyup', function (event) {
  const searchValue = (event.target as HTMLInputElement).value
  searchFunction(searchValue)
})
