import { apiService } from '../services/Api'

export async function changeEpisodePage (page: number) {
  console.log('ep')
  const handlePage = await apiService.getSpecificPageEpisodes(page)
  const episodesContainer = document.getElementById('episodes')

  episodesContainer.innerText = ''

  await handlePage.forEach(async (episode: any) => {
    const episodeName = episode.name
    const episodeDate = episode.air_date
    const episodeId = episode.episode
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
