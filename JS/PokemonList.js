
class PokemonList {
    constructor() { 
        this.pokemonView = new PokemonView()
    }

    getPokemon() {
        const numPokemon = 151;
        const promises = [];

        for (let index = 1; index <= numPokemon; index++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${index}`
            promises.push(fetch(url).then((res) => res.json()));
        }

        Promise.all(promises).then((results) => {
            const pokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                types: data.types.map((type) => type.type.name),
                img: data.sprites.front_default
            }));

            this.pokemonView.createPokemonCard(pokemon);
        });

    }


}


