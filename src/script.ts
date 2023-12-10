// selecting elements
const head = document.getElementsByClassName("head")[0];

// our api key / global varibales
const API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;

//our data fetch api function
async function getData(Key) {
  try {
    const response = await fetch(Key);
    let data = await response.json();
    let resultsData = data.results;
    listData(resultsData);
  } catch (error) {
    console.log(error);
  }
}

// our fucntions
const listData = async (data) => {
  for (let item of data) {
    // fetching our ip for each pokie that we get
    let pokeIds = `https://pokeapi.co/api/v2/pokemon/${item.name}/`;
    const pokieRes = await fetch(pokeIds);
    const pokieData = await pokieRes.json();
    console.log(pokieData);
    console.log(pokieData.id);

    // creating our elements dynamclly
    const pokeCard = document.createElement("div");
    pokeCard.classList.add("poke-Card");

    const pokeImg = document.createElement("img");
    pokeImg.classList.add("poke-Img");
    pokeCard.appendChild(pokeImg);

    const pokeIfoCard = document.createElement("div");
    pokeIfoCard.classList.add("poke-Ifo-Card");
    pokeCard.appendChild(pokeIfoCard);

    const pokeIdWrap = document.createElement("div");
    pokeIdWrap.classList.add("poke-Id-Wrap");
    pokeIdWrap.textContent = `##${pokieData.id}`;
    pokeIfoCard.appendChild(pokeIdWrap);

    const pokeName = document.createElement("h1");
    pokeName.classList.add("poke-Name");
    pokeName.textContent = item.name;
    pokeIfoCard.appendChild(pokeName);

    const pokeType = document.createElement("div");
    pokeType.classList.add("poke-Type");
    pokeCard.appendChild(pokeIfoCard);

    head.appendChild(pokeCard);
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
