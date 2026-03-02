let pokemonType;

const pokemonCardRef = document.getElementById('pokemon_card');
const pokemonCardWrapperRef = document.getElementById('pokemon_card_wrapper');


function init(param) {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit='+param;
    loadPokemons(url, param);

}


async function loadPokemons(url, param) {
    console.log(url);
    
    try {
        let response = await fetch(url);
        // Wenn Fehler auftritt, wird restlicher Code in try nicht ausgeführt
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        let responseAsJson = await response.json();
        let pokemons = responseAsJson.results;

        //console.log(pokemons[0]);        

        for (let i = 0; i < param; i++) {
            let pokemonDetails = await loadPokemonDetails(pokemons[i]);
            pokemonType = pokemonDetails.types[0].type.name;
            
            pokemonCardWrapperRef.innerHTML += pokemonCardTemplate(pokemons[i], pokemonDetails, pokemonType);
        }


    } catch (error) {
        console.error('Fehler: ' + error.message);
    }
}

async function loadPokemonDetails(pokemonData) {
    let detailUrl = pokemonData.url;

    let response = await fetch(detailUrl);

    if (response.ok) {
        let pokemonDetailsAsJson = await response.json();
        return pokemonDetailsAsJson;
    }

}

/* function getPokemonColor(typeName) {
    let bg_color = "";    

    switch (typeName) {
        case typeName = "grass":
            bg_color = "red";
            break;
        case typeName = "fire":
            bg_color = "red";
            break;
        default:
            bg_color = "white";
            break;
    }
}
 */