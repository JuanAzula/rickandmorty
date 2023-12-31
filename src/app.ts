import './styles.css'
import { changeCharPage } from './handlePagination/charPagination'
import { changeEpisodePage } from './handlePagination/episodePagination'
import { changeLocationPage } from './handlePagination/locationPagination'
import { handleSection } from './components/menu'
import { searchFunction } from './searchbar'

// const c = await apiService.getEpisodes()
// console.log(c)
// const f = await apiService.getFirstPageCharacters()
// console.log(f)
// const a = await apiService.getSpecificPageCharacters(1)
// console.log(a)
// const b = await apiService.getLocations()
// console.log(b)

// const audio = new Audio('./RickandMorty.mp3')
// audio.volume = 0.4
// audio.play()

// ////// HANDLE MENU BUTTONS /////
const buttons = document.querySelectorAll('.menu-container .button')

buttons.forEach(button => {
  button.addEventListener('click', handleSection as EventListener)
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
  if (event.key === 'Enter') {
    const searchValue = (event.target as HTMLInputElement).value
    console.log(searchValue)
    searchFunction(searchValue)
  }
})
