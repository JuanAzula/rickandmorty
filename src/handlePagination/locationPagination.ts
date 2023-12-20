import { apiService } from "../services/Api";

export async function changeLocationPage(page: number) {
    const handlePage = await apiService.getSpecificPageLocations(page);
    const locationsContainer = document.getElementById('locations');

    locations.innerText = ''


    await handlePage.forEach(async (location: any) => {
        const characterName = location.name
        const locationDimension = location.dimension
        const locationType = location.type

        const locationNameElement = document.createElement('h3');
        locationNameElement.textContent = characterName

        const dimensionElement = document.createElement('p');
        dimensionElement.textContent = 'Dimension: ' + locationDimension;

        const typeElement = document.createElement('p');
        typeElement.textContent = 'Type: ' + locationType;

        const singularChar = document.createElement('div');

        singularChar?.classList.add('location');
        singularChar?.classList.add('innerCardLocation');
        singularChar?.appendChild(locationNameElement);
        singularChar?.appendChild(dimensionElement);
        singularChar?.appendChild(typeElement);
        locationsContainer?.appendChild(singularChar);
    })

}