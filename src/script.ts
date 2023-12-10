// selecting elements
const head = document.getElementsByClassName("head")[0];
const inputBtns: any = document.querySelectorAll(".input-Btn");

// our api key / global varibales
const API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;

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
    // console.log(pokieData);

    // sprites front_default

    let pokieTypes = pokieData.types[0].type.name;

    // creating our elements dynamclly
    const pokeCard = document.createElement("div");
    pokeCard.classList.add("poke-Card");

    // if else the type of pokie should have its own color
    if (pokieTypes === "grass") {
      pokeCard.style.backgroundColor = `#C1F2B0`;
    } else if (pokieTypes === "fire") {
      pokeCard.style.backgroundColor = `#FFCD4B`;
    } else if (pokieTypes === "water") {
      pokeCard.style.backgroundColor = `#80B3FF`;
    } else if (pokieTypes === "bug") {
      pokeCard.style.backgroundColor = `#B2533E`;
    } else if (pokieTypes === "normal") {
      pokeCard.style.backgroundColor = `#CDFAD5`;
    } else if (pokieTypes === "poison") {
      pokeCard.style.backgroundColor = `#E4E4D0`;
    } else if (pokieTypes === "ground") {
      pokeCard.style.backgroundColor = `#CEE6F3`;
    } else if (pokieTypes === "fairy") {
      pokeCard.style.backgroundColor = `#AED8CC`;
    } else if (pokieTypes === "electric") {
      pokeCard.style.backgroundColor = `#F0DE36`;
    } else if (pokieTypes === "ghost") {
      pokeCard.style.backgroundColor = `#0174BE`;
    } else if (pokieTypes === "psychic") {
      pokeCard.style.backgroundColor = `#FFE4A7`;
    } else if (pokieTypes === "rock") {
      pokeCard.style.backgroundColor = `#A4907C`;
    } else {
      pokeCard.style.backgroundColor = `white`;
    }

    // appending dynamiclly created elements to body
    const pokeImg = document.createElement("img");
    pokeImg.src = `${pokieData.sprites.front_default}`;
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
    pokeType.textContent = pokieTypes;
    pokeIfoCard.appendChild(pokeType);
    pokeCard.appendChild(pokeIfoCard);

    head.appendChild(pokeCard);
  }
};

// our eventlisnters
getData(API_KEY);

inputBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(e.target.value);
  });
});
