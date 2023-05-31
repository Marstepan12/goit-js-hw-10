const apiKey = 'live_21Rf5KYshS9QjizYw0etdtPxUV7cpBeydLCRxjWntWWpnOa4zQuJg4ZVtYJJEafl';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}