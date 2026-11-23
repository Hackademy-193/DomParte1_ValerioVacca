let products = [
    {
        name: "Minecraft",
        price: 29.99,
        category: "Sandbox",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg"
    },
    {
        name: "Cyberpunk 2077",
        price: 59.99,
        category: "RPG",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: 59.99,
        category: "Azione",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
    },
    {
        name: "Elden Ring",
        price: 59.99,
        category: "RPG",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
        name: "Hogwarts Legacy",
        price: 49.99,
        category: "Avventura",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"
    },
    {
        name: "God of War",
        price: 39.99,
        category: "Azione",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg"
    }
];


let showProducts = document.querySelector('#showProducts');

// variabile d'appoggio
let check = false;

showProducts.addEventListener('click', () => {


    if (check == false) {
        // catturo il papà
        let cardContainer = document.querySelector('#cardContainer');

        // devo creare le card per ogni prodotto e quindi
        products.forEach((prodotto) => {

            // per ogni prodotto creo un tag div
            let div = document.createElement('div');

            // dopo di che, ad ogni singolo div, aggiungo la classe card
            div.classList.add('card');

            // poi vado a riempire ogni div con classe card, con del contenuto

            div.innerHTML = `
            <div>
                <img class="imgProduct" src="${prodotto.img}" alt="Ciaooo vado qua">
            </div>

            <div>
                <h3>${prodotto.name}</h3>
                <h4>${prodotto.category}</h4>
                <p>${prodotto.price} euro</p>
            </div>
    `;

            // infine, appendo il figlio div al padre cardContainer

            cardContainer.appendChild(div);

        });

        // modifica anche la scritta del bottone
        showProducts.innerHTML ='Nascondi Prodotti';

        // passo (sovrascrivo) check a true
        check = true;
    
    
    } else {

        // svuota il cardContainer
        cardContainer.innerHTML = '';

        // modifica anche la scritta del bottone
        showProducts.innerHTML ='Mostra Prodotti';

        // ripasso (sovrascrivo) check a false
        check = false;

    }

});

