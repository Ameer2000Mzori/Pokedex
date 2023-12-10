// selecting elements
const head = document.getElementsByClassName("head")[0];

// our api key / global varibales
const API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;

//our data fetch api function
async function getData(Key) {
  try {
    const response = await fetch(Key);
    let data = await response.json();
    console.log(data);
    let resultsData = data.results;
    listData(resultsData);
  } catch (error) {
    console.log(error);
  }
}

// our fucntions
const listData = (data) => {
  for (let item of data) {
  }
};

// our eventlisnters
getData(API_KEY);

// our html tree look up :

//<div class="poke-Card">
//   <img
//     class="poke-Img"
//     src="https://www.taartprintje.com/image/cache/catalog/taart/Pokemon%20TP1-500x500.PNG"
//     alt=""
//   />
//   <div class="poke-Ifo-Card">
//     <div class="poke-Id-Wrap">#001</div>
//     <h1 class="poke-Name">Bulbasaur</h1>
//     <div class="poke-Type">Type: Grass</div>
//   </div>
//</div>
