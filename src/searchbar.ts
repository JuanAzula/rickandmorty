import { apiService } from './services/Api'

export async function searchFunction (searchValue: string) {
  const category = localStorage.getItem('category')

  if (category === 'characters') {
    let foundMatch = false
    let count = 0
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

          count++
          console.log(count)
          if (count >= 10) {
            foundMatch = true
          }
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
    const location = await apiService.getLocation(searchValue)
    const locationsContainer = document.getElementById('locations')
    console.log(location)
    locationsContainer.innerText = ''

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
