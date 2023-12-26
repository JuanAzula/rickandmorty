import { apiService } from '../services/Api'

export async function changeCharPage (page: number) {
  const handlePage = await apiService.getSpecificPageCharacters(page)
  const charactersContainer = document.getElementById('characters')

  characters.innerText = ''

  await handlePage.forEach(async (character: any) => {
    const characterName = character.name
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
  })
}
