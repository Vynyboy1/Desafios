function createType(PokemonType) {
  return PokemonType.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function createLiHTML(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ul class="types">
        ${createType(pokemon.types).join("")}
      </ul>
      <img
        src="${pokemon.sprites.other.dream_world.front_default}"
        alt="pokemon.name"
      />
    </div>
  </li>`;
}
//fetch retorna uma promisse

// fetch(url)
//   .then(function (response) {
//     response.json().then(function (responcebody) {
//       console.log(responcebody);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Requisição concluida");
//   });

let pokeList = document.querySelector("#pokemonList");
pokeApi.getPokemons().then((pokemonList = []) => {
  pokeList.innerHTML = pokemonList.map(createLiHTML).join("");
  // let listitens = [];
  // for (let i = 0; i < pokemonList.length; i++) {
  //   const pokemon = pokemonList[i];
  //   listitens.push(createLiHTML(pokemon));
  // }
  // console.log(listitens);
});
