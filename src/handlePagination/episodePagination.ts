import { apiService } from '../services/Api'

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

  await handlePage.forEach(async (episode: any) => {
    const episodeName = episode[EPISODE.NAME]
    const episodeDate = episode[EPISODE.AIR_DATE]
    const episodeId = episode[EPISODE.EPISODE]
    console.log(episodeName)
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
  })
}
