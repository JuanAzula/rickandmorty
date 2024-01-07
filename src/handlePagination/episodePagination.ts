import { apiService } from '../services/Api'
import { type ResultEpisodes } from '../types/apiEpisodes'

const enum EPISODE {
  NAME = 'name',
  AIR_DATE = 'air_date',
  EPISODE = 'episode'
}
export async function changeEpisodePage (page: number) {
  console.log('ep')
  const handlePage = await apiService.getSpecificPageEpisodes(page)
  const episodesContainer = document.getElementById('episodes')

  if (episodesContainer !== null && episodesContainer instanceof HTMLDivElement) {
    episodesContainer.innerText = ''
  }

  await handlePage.forEach(async (episode: ResultEpisodes) => {
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
  })
}
