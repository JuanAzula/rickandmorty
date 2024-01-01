import { apiService } from '../services/Api'

export async function changeLocationPage (page: number) {
  const handlePage = await apiService.getSpecificPageLocations(page)
  const locationsContainer = document.getElementById('locations')

  locationsContainer.innerText = ''

  let locationResidents: any = {}
  const locationResidentsTotal: any[] = []

  await handlePage.forEach(async (location: any) => {
    const characterName = location.name
    const locationDimension = location.dimension
    const locationType = location.type
    const locationResidentsUrl = location.residents
    let locationResidentsName: any
    const locationResidentsNameTotal: any[] = []

    locationResidentsUrl.forEach(async (url: any) => {
      if (url !== undefined) {
        locationResidents = await apiService.getLocationResidents(url)
        locationResidentsTotal.push(locationResidents)

        console.log(url)

        console.log(locationResidents)
        console.log(locationResidentsTotal)
      }
      // locationResidents = await apiService.getLocationResidents(url)
      // locationResidentsTotal.push(locationResidents)
      locationResidentsTotal.forEach(async (locationResidents: any) => {
        locationResidentsName = locationResidents.name
        locationResidentsNameTotal.push(locationResidentsName)
      })

      const locationNameElement = document.createElement('h3')
      locationNameElement.textContent = characterName

      const dimensionElement = document.createElement('p')
      dimensionElement.textContent = 'Dimension: ' + locationDimension

      const typeElement = document.createElement('p')
      typeElement.textContent = 'Type: ' + locationType

      const residentsElement = document.createElement('p')
      residentsElement.textContent = 'Residents: ' + locationResidents.name

      const singularChar = document.createElement('div')

      singularChar?.classList.add('location')
      singularChar?.classList.add('innerCardLocation')
      singularChar?.appendChild(locationNameElement)
      singularChar?.appendChild(dimensionElement)
      singularChar?.appendChild(typeElement)
      singularChar?.appendChild(residentsElement)
      locationsContainer?.appendChild(singularChar)
    })
  })
}
