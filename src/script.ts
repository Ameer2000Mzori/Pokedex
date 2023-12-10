// selecting elements

// our api key / global varibales
const API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;

//our data fetch api function
async function getData(Key) {
  try {
    const response = await fetch(Key);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// our fucntions

// our eventlisnters
getData(API_KEY);
