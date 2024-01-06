import { apiService } from '../services/Api'

const enum LOCATION {
  NAME = 'name',
  DIMENSION = 'dimension',
  TYPE = 'type',
  RESIDENTS = 'residents'
}

export async function changeLocationPage (page: number) {
  const handlePage = await apiService.getSpecificPageLocations(page)
  const locationsContainer = document.getElementById('locations')

  if (locationsContainer !== null && locationsContainer instanceof HTMLDivElement) {
    locationsContainer.innerText = ''
  }
  for (const location of handlePage) {
    const locationName = location[LOCATION.NAME]
    const locationDimension = location[LOCATION.DIMENSION]
    const locationType = location[LOCATION.TYPE]
    const locationResidentsUrl = location[LOCATION.RESIDENTS]
    const locationResidentsTotal: any[] = []

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

    console.log(locationResidentsNameTotalFormat)

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
}
