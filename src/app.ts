import './styles.css'
import { apiService } from './services/Api'
import { changeCharPage } from './handlePagination/charPagination'
import { changeEpisodePage } from './handlePagination/episodePagination'
import { changeLocationPage } from './handlePagination/locationPagination'
import { handleSection } from './components/menu'

const c = await apiService.getEpisodes()
console.log(c)
const f = await apiService.getFirstPageCharacters()
console.log(f)
const a = await apiService.getSpecificPageCharacters(1)
console.log(a)
const b = await apiService.getLocations()
console.log(b)

const audio = new Audio('./RickandMorty.mp3')
audio.volume = 0.4
audio.play()
// const characters = document.getElementById('characters');

// characters.innerText = a.map(id => id.name);

// console.log(a[0]);

// episodes, gender, location.name, origin.name, species, status

// ////// HANDLE MENU BUTTONS /////
const buttons = document.querySelectorAll('.menu-container .button')
const menuContainer = document.getElementById('menu-container')

buttons.forEach(button => {
  button.addEventListener('click', handleSection)
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

// async function changePage(page: number) {
//     const handlePage = await apiService.getSpecificPageCharacters(page);

//     const characters = document.getElementById('characters');
//     characters.innerText = handlePage.map(id => id.name);

//     const imageContainer = document.getElementById('imgContainer');

//     images.src = handlePage.map(id => id.image);
// }

// const lis = document.querySelectorAll( li');

// lis.forEach(li => {
//     li.addEventListener('click', function (this: HTMLElement) {
//         const value = this.querySelector('a')?.getAttribute('value');
//         changePage(value ? Number(value) : 1);
//     });
// });
