import { apiService } from './services/Api'

export async function searchFunction (searchValue: string) {
  const category = localStorage.getItem('category')

  if (category === 'characters') {
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
    // console.log(character)
    charactersContainer.innerText = ''
    for (const characters of totalCharacters) {
      characters.forEach(async (character: any) => {
        const characterName = character.name
        const charStatus = character.status
        const charSpecies = character.species
        const charGender = character.gender
        const charOrigin = character.origin.name
        const characterImage = character.image

        const characterNameLower = characterName.toLowerCase()
        const searchValueLower = searchValue.toLowerCase()

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
    const episode = await apiService.getEpisode(searchValue)
    const episodesContainer = document.getElementById('episodes')
    console.log(episode)
    episodesContainer.innerText = ''

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
    let location: any
    const totalLocations: any[] = []
    for (let i = 1; i < 8; i++) {
      location = await apiService.getSpecificPageLocations(i)
      totalLocations.push(location)
    }
    const locationsContainer = document.getElementById('locations')
    console.log(location)
    locationsContainer.innerText = ''

    for (const locations of totalLocations) {
      locations.forEach(async (location: any) => {
        const locationName = location.name
        const locationDimension = location.dimension
        const locationType = location.type
        const locationResidentsUrl = location.residents
        const locationResidentsTotal: any[] = []

        locationsContainer.innerText = ''

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

        const locationNameLower = locationName.toLowerCase()
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
