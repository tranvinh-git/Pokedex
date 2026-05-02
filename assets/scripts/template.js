
function getPokemonCardTemplate(pokemon, originalIndex, typeClass) {
  return `
  <li>
     <button aria-haspopup="dialog" aria-controls="pokemon-dialog" class="poke-card" onclick="openDialog(${originalIndex})">
        <p class="poke-id">#${pokemon.id}</p>
        <h2 class="poke-name">${pokemon.name}</h2>
        <div class="poke-img-div ${typeClass}">
           <img class="poke-img" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="picture of ${pokemon.name}">
        </div>
        
        <div class="poke-types">${getPokemonTypesHTML(pokemon)}</div>
     </button>
  </li>
    `
}


function getPokemonTypesTemplate(type) {
  return `
      <img
         class="type-icon"
         src="./assets/icons/${type}.svg"
         alt="${type}"
         title="${type}"
       >
      `;
}


function getDialogTemplate(pokemon, typeClass) {
  return `
    <div class="navigation">
        <button class="x-dialog" aria-label="close dialog" onclick="closeDialog()">
          <span>&#215;</span>
        </button>
    </div>
    <p class="center-dialog-id">#${pokemon.id}</p>
    <h2 id="dialog-title" class="center-dialog-name">${pokemon.name}</h2>

    <div class="poke-img-div center-dialog-img ${typeClass}">
        <img class="dialog-img" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
    </div>

    <div class="pokemon-details">
        <button id="show-main" role="tab" onclick="showMain()">Main</button>
        <button id="show-stats" role="tab" onclick="showStats()">Stats</button>
        <button id="show-evo" role="tab" onclick="fetchSpecies()">Evo Chain</button>
    </div>

    <div class="details-container">
        <div id="details-box" class="details-box"></div>
    </div>

    <div class="buttons-left-right">
        <button class="arrow" aria-label="previous pokémon" onclick="prevPokemon()">
            <span>&#10094;</span>
        </button>
        <button class="arrow" aria-label="next pokémon" onclick="nextPokemon()">
            <span>&#10095;</span>
        </button>
    </div>  
    `;
}


function getShowMainTemplate(pokemon, height, weight, abilities) {
  return `
      <p><strong>height:</strong> ${height} m</p>
      <p><strong>weight:</strong> ${weight} kg</p>
      <p><strong>base experience:</strong> ${pokemon.base_experience}</p>
      <p><strong>abilities:</strong> ${abilities}</p>
   `
}

function getShowStatsTemplate(statName, statValue, percent) {
  return `
        <p>${statName}</p>
        <div class="progress mb-1">
          <div class="progress-bar" 
               role="progressbar"
               aria-label="${statName}" 
               aria-valuenow="${statValue}"
               aria-valuemin="0" 
               aria-valuemax="255"
               style="width: ${percent}%; background-color: rgb(227, 32, 38);">
            ${statValue}
          </div>
        </div>
     `
}

function getPokemonEvoTemplate(pokemon) {
  return `
    <img 
      class="evo-img" 
        src="${pokemon.sprites.other['official-artwork'].front_default}" 
        alt="evolution: ${pokemon.name}" title="${pokemon.name}"
    >`;
}

function getEvoArrowTemplate() {
  return `
        <span class="evo-arrow" aria-hidden="true"> &gt; </span>
     `;
}