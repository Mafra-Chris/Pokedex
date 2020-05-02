
class PokemonView {
    constructor() {

    }

    createPokemonCard(pokemon) {
        console.log(pokemon.length);





        for (let index = 0; index < pokemon.length; index++) {

            let divCard = document.createElement('div');
            let imgPokemon = document.createElement('img');
            let divDetails = document.createElement('div');
            let pNum = document.createElement('p');
            let h3Name = document.createElement('h3');

            let conteudoP = document.querySelector('#conteudoP');

            divCard.classList.add('card');
            imgPokemon.classList.add('img-pokemon');
            divDetails.classList.add('details');
            pNum.classList.add('numero-pokemon');
            h3Name.classList.add('nome-pokemon');

            imgPokemon.src = pokemon[index].img;
            pNum.textContent = "N° " + pokemon[index].id;
            h3Name.textContent = pokemon[index].name;

            divCard.appendChild(imgPokemon);
            divDetails.appendChild(pNum);
            divDetails.appendChild(h3Name)
            divCard.appendChild(divDetails);
            conteudoP.appendChild(divCard);

        }

    }

}


