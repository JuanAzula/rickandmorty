export function handleSection (event: MouseEvent) {
  const button = event.target as HTMLButtonElement
  const buttonText = button.name

  const episodeSection = document.getElementById('episodesSection')
  const episodePagination = document.getElementById('episodesPagination')

  const characterPagination = document.getElementById('charactersPagination')
  const characterSection = document.getElementById('charactersSection')

  const locationSection = document.getElementById('locationSection')
  const locationPagination = document.getElementById('locationPagination')

  if (buttonText === 'episodes') {
    localStorage.setItem('category', 'episodes')
    episodePagination?.classList.replace('hide-section', 'show-section')
    episodeSection?.classList.replace('hide-section', 'show-section')
  } else {
    episodePagination?.classList.replace('show-section', 'hide-section')
    episodeSection?.classList.replace('show-section', 'hide-section')
  }

  if (buttonText === 'characters') {
    localStorage.setItem('category', 'characters')
    characterPagination?.classList.replace('hide-section', 'show-section')
    characterSection?.classList.replace('hide-section', 'show-section')
  } else {
    characterPagination?.classList.replace('show-section', 'hide-section')
    characterSection?.classList.replace('show-section', 'hide-section')
  }

  if (buttonText === 'locations') {
    localStorage.setItem('category', 'locations')
    locationPagination?.classList.replace('hide-section', 'show-section')
    locationSection?.classList.replace('hide-section', 'show-section')
  } else {
    locationPagination?.classList.replace('show-section', 'hide-section')
    locationSection?.classList.replace('show-section', 'hide-section')
  }
}
