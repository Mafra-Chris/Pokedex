
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
            let type0 = document.createElement("img");
            let type1 = document.createElement("img");
            let conteudoP = document.querySelector('#conteudoP');
            let url0 = "../svg/tag-"+pokemon[index].types[0]+".svg";
            let url1 = "../svg/tag-"+pokemon[index].types[1]+".svg";
        

            divCard.classList.add('card');
            imgPokemon.classList.add('img-pokemon');
            divDetails.classList.add('details');
            pNum.classList.add('numero-pokemon');
            h3Name.classList.add('nome-pokemon');
            type0.classList.add('tipo-pokemon');
            type1.classList.add('tipo-pokemon');
           

            imgPokemon.src = pokemon[index].img;
            pNum.textContent = "N° " + pokemon[index].id;
            h3Name.textContent = pokemon[index].name;

            divCard.appendChild(imgPokemon);
            divDetails.appendChild(pNum);
            divDetails.appendChild(h3Name);

            if(pokemon[index].types[1] != undefined){
                type0.setAttribute("src", url0);
                type1.setAttribute("src", url1);
                divDetails.appendChild(type0);
                divDetails.appendChild(type1);
            }else{
                type0.setAttribute("src", url0);
                divDetails.appendChild(type0);
            }
            
            divCard.appendChild(divDetails);
            conteudoP.appendChild(divCard);
            
        }

    }

}


