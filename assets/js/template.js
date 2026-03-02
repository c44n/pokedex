
function pokemonCardTemplate(pokemon, details, bg_color) {
    let allTypes = "";

    let types = details.types;

    for (let i = 0; i < types.length; i++) {
        let type = types[i];
        allTypes += typesTemplate(type, bg_color);
    }

    return `
        <div class="pokemon_card shadow">
            <div class="card_header bg_${bg_color}">
                <div class="pokemon_title_wrapper">
                <h2>${pokemon.name}</h2>
                <h3>#${details.id}</h3>
                </div>
                <div class="pokemon_image_wrapper">
                    <img src="${details.sprites.other.showdown.front_default}" class="pokemon_image">
                </div>
            </div>

            <div class="card_body">
                ${allTypes}
            </div>
        </div>
    `;
}

function typesTemplate(type) {
    return `
        <span class="type_badge">
            ${type.type.name}
        </span>
    `;
}
