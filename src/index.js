import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.getElementById('breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
const catImage = document.getElementById('cat-image');
const breedName = document.getElementById('breed-name');
const breedDescription = document.getElementById('breed-description');
const breedTemperament = document.getElementById('breed-temperament');

// Fetch and populate breed select options
fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.text = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch(() => {
    showError();
  });

// Handle breed select change event
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  showLoader();
  hideError();
  fetchCatByBreed(selectedBreedId)
    .then(cats => {
      if (cats.length > 0) {
        const cat = cats[0];
        catImage.src = cat.url;
        breedName.textContent = cat.breeds[0].name;
        breedDescription.textContent = cat.breeds[0].description;
        breedTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
        showCatInfo();
      } else {
        showError();
      }
    })
    .catch(() => {
      showError();
    });
});

// Show loader
function showLoader() {
  loader.style.display = 'block';
}

// Hide loader
function hideLoader() {
  loader.style.display = 'none';
}

// Show error
function showError() {
  error.style.display = 'block';
}

// Hide error
function hideError() {
  error.style.display = 'none';
}

// Show cat info
function showCatInfo() {
  catInfo.style.display = 'block';
}