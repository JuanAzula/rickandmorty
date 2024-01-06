import { apiService } from '../services/Api'

const enum CHARACTER {
  NAME = 'name',
  STATUS = 'status',
  SPECIES = 'species',
  GENDER = 'gender',
  ORIGIN = 'origin.name',
  IMAGE = 'image'
}
export async function changeCharPage (page: number) {
  const handlePage = await apiService.getSpecificPageCharacters(page)
  const charactersContainer = document.getElementById('characters')

  if (charactersContainer !== null && charactersContainer instanceof HTMLDivElement) {
    charactersContainer.innerText = ''
  }

  await handlePage.forEach(async (character: any) => {
    const characterName = character[CHARACTER.NAME]
    const charStatus = character[CHARACTER.STATUS]
    const charSpecies = character[CHARACTER.SPECIES]
    const charGender = character[CHARACTER.GENDER]
    const charOrigin = character[CHARACTER.ORIGIN]
    const characterImage = character[CHARACTER.IMAGE]

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
  })
}
