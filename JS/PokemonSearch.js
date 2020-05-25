var pokemonSearch = document.querySelector("#search-pokemon");

pokemonSearch.addEventListener("input", function () {
    var nomes = document.getElementsByClassName('nome-pokemon');
    var cards = document.querySelectorAll('.card')


    if (this.value.length > 0) {
        for (let i = 0; i < nomes.length; i++) {
            nomes[i].parentNode.parentNode.classList.add('invisivel');

            var exp = new RegExp(pokemonSearch.value, "i");

            if (exp.test(nomes[i].textContent)) {
                nomes[i].parentNode.parentNode.classList.remove("invisivel");
            } else {
                nomes[i].parentNode.parentNode.classList.add("invisivel");
            }
        }



    } else {
        for (let i = 0; i < nomes.length; i++) {
            nomes[i].parentNode.parentNode.classList.remove("invisivel");
        }
    }
})