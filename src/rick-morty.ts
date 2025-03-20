// The URL of the resource you want to fetch
const apiBase = 'https://rickandmortyapi.com/api/character'; // Example public API

function random(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

async function fetchCharacterData() {
  console.log('Fetching data...'); // This will likely be logged first

  try {
    const response = await fetch(`${apiBase}/${random(20)}`); // Fetch a random character

    // Check if the request was successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();

    // 'data' is the JSON object returned by the API
    console.log('Fetched data:', data);

    // You can now work with the data, for example, update the UI
    const nameElement = document.getElementById('character-name');
    const statusElement = document.getElementById('character-status');
    const speciesElement = document.getElementById('character-species');
    const imageElement: HTMLImageElement = document.getElementById('character-image') as HTMLImageElement;

    if (nameElement) {
      nameElement.textContent = data.name;
    }
    if (statusElement) {
      statusElement.textContent = `Status: ${data.status}`;
    }
    if (speciesElement) {
      speciesElement.textContent = `Species: ${data.species}`;
    }
    if (imageElement) {
      imageElement.src = data.image;
      imageElement.alt = data.name;
    }

  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error('Fetch error:', error);

    const errorElement = document.getElementById('error-message');

    if (errorElement && error instanceof Error) {
      errorElement.textContent = `Failed to fetch data: ${error.message}`;
    }
  }
}

document.querySelector('#random-character')?.addEventListener('click', fetchCharacterData);
fetchCharacterData();