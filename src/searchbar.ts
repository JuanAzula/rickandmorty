import { apiService } from './services/Api'

export async function searchFunction (searchValue: number) {
  const category = localStorage.getItem('category')
  if (category === 'characters') {
    const character = await apiService.getCharacter(searchValue)
    const charactersContainer = document.getElementById('characters')
    console.log(character)
    characters.innerText = ''

    const characterName = character.name
    console.log(characterName)
    const charStatus = character.status
    const charSpecies = character.species
    const charGender = character.gender
    const characterImage = character.image

    const nameCharElement = document.createElement('h3')
    nameCharElement.textContent = characterName

    const statusCharElement = document.createElement('p')
    statusCharElement.textContent = 'Status: ' + charStatus

    const speciesCharElement = document.createElement('p')
    speciesCharElement.textContent = 'Species: ' + charSpecies

    const genderCharElement = document.createElement('p')
    genderCharElement.textContent = 'Gender: ' + charGender

    const imageElement = document.createElement('img')
    imageElement.src = characterImage

    const singularChar = document.createElement('div')

    singularChar?.classList.add('character')
    singularChar?.classList.add('innerCard')
    singularChar?.appendChild(nameCharElement)
    singularChar?.appendChild(statusCharElement)
    singularChar?.appendChild(speciesCharElement)
    singularChar?.appendChild(genderCharElement)
    singularChar?.appendChild(imageElement)
    charactersContainer?.appendChild(singularChar)
  } else if (category === 'episodes') {
    const episode = await apiService.getEpisode(searchValue)
    const episodesContainer = document.getElementById('episodes')
    console.log(episode)
    episodes.innerText = ''

    const episodeName = episode.name
    const episodeDate = episode.air_date
    const episodeId = episode.episode

    const nameElement = document.createElement('h3')
    nameElement.textContent = episodeName

    const dateElement = document.createElement('h3')
    dateElement.textContent = episodeDate

    const idElement = document.createElement('h3')
    idElement.textContent = episodeId

    const singularChar = document.createElement('div')

    singularChar?.classList.add('episode')
    singularChar?.classList.add('innerCardEpisode')
    singularChar?.appendChild(nameElement)
    singularChar?.appendChild(idElement)
    singularChar?.appendChild(dateElement)
    episodesContainer?.appendChild(singularChar)
  } else if (category === 'locations') {
    const location = await apiService.getLocation(searchValue)
    const locationsContainer = document.getElementById('locations')
    console.log(location)
    locations.innerText = ''

    const locationName = location.name
    const locationDimension = location.dimension
    const locationType = location.type

    const locationNameElement = document.createElement('h3')
    locationNameElement.textContent = locationName

    const dimensionElement = document.createElement('p')
    dimensionElement.textContent = 'Dimension: ' + locationDimension

    const typeElement = document.createElement('p')
    typeElement.textContent = 'Type: ' + locationType

    const singularChar = document.createElement('div')

    singularChar?.classList.add('location')
    singularChar?.classList.add('innerCardLocation')
    singularChar?.appendChild(locationNameElement)
    singularChar?.appendChild(dimensionElement)
    singularChar?.appendChild(typeElement)
    locationsContainer?.appendChild(singularChar)
  }
}
