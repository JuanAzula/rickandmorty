import { apiService } from '../services/Api'
import { type ResultCharacters } from '../types/charactersType'
import { type ResultLocations } from '../types/locationsType'

const enum CHARACTER {
  NAME = 'name',
  STATUS = 'status',
  SPECIES = 'species',
  GENDER = 'gender',
  ORIGIN = 'origin',
  IMAGE = 'image'
}

const enum EPISODE {
  NAME = 'name',
  AIR_DATE = 'air_date',
  EPISODE = 'episode'
}

const enum LOCATION {
  NAME = 'name',
  DIMENSION = 'dimension',
  TYPE = 'type',
  RESIDENTS = 'residents'
}

export async function searchFunction (searchValue: string) {
  const category = localStorage.getItem('category')

  if (category === 'characters') {
    const searchString: string = searchValue
    const foundMatch = false
    let character: any
    const totalCharacters: any[] = []
    // const character = await apiService.getCharacter(searchValue)
    for (let i = 1; i < 43; i++) {
      if (foundMatch) {
        break
      }
      character = await apiService.getSpecificPageCharacters(i)
      totalCharacters.push(character)
    }

    const charactersContainer = document.getElementById('characters')
    if (charactersContainer !== null && charactersContainer instanceof HTMLDivElement) {
      charactersContainer.innerText = ''
    }
    for (const characters of totalCharacters) {
      characters.forEach(async (character: ResultCharacters) => {
        const characterName = character[CHARACTER.NAME]
        const charStatus = character[CHARACTER.STATUS]
        const charSpecies = character[CHARACTER.SPECIES]
        const charGender = character[CHARACTER.GENDER]
        const charOrigin = character[CHARACTER.ORIGIN].name
        const characterImage = character[CHARACTER.IMAGE]

        const characterNameLower: string = characterName.toLowerCase()
        const searchValueLower = searchString.toLowerCase()

        if (characterNameLower.includes(searchValueLower)) {
          const nameCharElement = document.createElement('h3')
          nameCharElement.textContent = characterName

          const statusCharElement = document.createElement('p')
          statusCharElement.textContent = 'Status: ' + charStatus

          const speciesCharElement = document.createElement('p')
          speciesCharElement.textContent = 'Species: ' + charSpecies

          const genderCharElement = document.createElement('p')
          genderCharElement.textContent = 'Gender: ' + charGender

          const originCharElement = document.createElement('p')
          originCharElement.textContent = 'Origin: ' + charOrigin

          const imageElement = document.createElement('img')
          imageElement.src = characterImage

          const singularChar = document.createElement('div')

          singularChar?.classList.add('character')
          singularChar?.classList.add('innerCard')
          singularChar?.appendChild(nameCharElement)
          singularChar?.appendChild(statusCharElement)
          singularChar?.appendChild(speciesCharElement)
          singularChar?.appendChild(genderCharElement)
          singularChar?.appendChild(originCharElement)
          singularChar?.appendChild(imageElement)
          charactersContainer?.appendChild(singularChar)
        }
      })
    }
  } else if (category === 'episodes') {
    const episode: any = await apiService.getEpisode(searchValue)
    const episodesContainer = document.getElementById('episodes')

    if (episodesContainer !== null && episodesContainer instanceof HTMLDivElement) {
      episodesContainer.innerText = ''
    }

    const episodeName = episode[EPISODE.NAME]
    const episodeDate = episode[EPISODE.AIR_DATE]
    const episodeId = episode[EPISODE.EPISODE]
    const episodeCharactersUrl = episode.characters
    const episodeCharactersTotal: any[] = []

    for (const url of episodeCharactersUrl) {
      if (url !== undefined) {
        const episodeCharacters = await apiService.getEpisodeCharacters(url)
        episodeCharactersTotal.push(episodeCharacters)
      }
    }

    let episodeCharactersTotalFormat: string = ''
    for (const names of episodeCharactersTotal) {
      episodeCharactersTotalFormat += names.name + ', '
    }
    episodeCharactersTotalFormat = episodeCharactersTotalFormat.slice(0, -2) // Eliminar la coma extra al final

    const nameElement = document.createElement('h3')
    nameElement.textContent = episodeName

    const dateElement = document.createElement('h3')
    dateElement.textContent = episodeDate

    const idElement = document.createElement('h3')
    idElement.textContent = episodeId

    const charactersElement = document.createElement('p')
    charactersElement.textContent = 'Characters: ' + episodeCharactersTotalFormat

    const singularChar = document.createElement('div')

    charactersElement?.classList.add('location-residents')

    singularChar?.classList.add('episode')
    singularChar?.classList.add('innerCardEpisode')
    singularChar?.appendChild(nameElement)
    singularChar?.appendChild(idElement)
    singularChar?.appendChild(dateElement)
    singularChar?.appendChild(charactersElement)
    episodesContainer?.appendChild(singularChar)
  } else if (category === 'locations') {
    let location: any
    const totalLocations: any[] = []
    for (let i = 1; i < 8; i++) {
      location = await apiService.getSpecificPageLocations(i)
      totalLocations.push(location)
    }
    const locationsContainer = document.getElementById('locations')

    if (locationsContainer !== null && locationsContainer instanceof HTMLDivElement) {
      locationsContainer.innerText = ''
    }

    for (const locations of totalLocations) {
      locations.forEach(async (location: ResultLocations) => {
        const locationName = location[LOCATION.NAME]
        const locationDimension = location[LOCATION.DIMENSION]
        const locationType = location[LOCATION.TYPE]
        const locationResidentsUrl = location[LOCATION.RESIDENTS]
        const locationResidentsTotal: any[] = []

        if (locationsContainer !== null && locationsContainer instanceof HTMLDivElement) {
          locationsContainer.innerText = ''
        }

        for (const url of locationResidentsUrl) {
          if (url !== undefined) {
            const locationResidents = await apiService.getLocationResidents(url)
            locationResidentsTotal.push(locationResidents)
          }
        }

        let locationResidentsNameTotalFormat: string = ''
        for (const names of locationResidentsTotal) {
          locationResidentsNameTotalFormat += names.name + ', '
        }
        locationResidentsNameTotalFormat = locationResidentsNameTotalFormat.slice(0, -2) // Eliminar la coma extra al final

        const locationNameLower: string = locationName.toLowerCase()
        const searchValueLower = searchValue.toLowerCase()

        if (locationNameLower.includes(searchValueLower)) {
          const locationNameElement = document.createElement('h3')
          locationNameElement.textContent = locationName

          const dimensionElement = document.createElement('p')
          dimensionElement.textContent = 'Dimension: ' + locationDimension

          const typeElement = document.createElement('p')
          typeElement.textContent = 'Type: ' + locationType

          const residentsElement = document.createElement('p')
          residentsElement.textContent = 'Residents: ' + locationResidentsNameTotalFormat

          const singularChar = document.createElement('div')

          singularChar?.classList.add('location')
          singularChar?.classList.add('innerCardLocation')
          if (locationName === 'Earth (Replacement Dimension)' || locationName === 'Citadel of Ricks') {
            residentsElement?.classList.add('location-residents')
          } else {
            residentsElement?.classList.remove('location-residents')
          }
          singularChar?.appendChild(locationNameElement)
          singularChar?.appendChild(dimensionElement)
          singularChar?.appendChild(typeElement)
          singularChar?.appendChild(residentsElement)
          locationsContainer?.appendChild(singularChar)
        }
      })
    }
  }
}
