// console.log(document);

// per vedere meglio il mio document, uso un altro metodo della console, che è il console.dir()
// console.dir(document);

// sto catturando l'h1 presente nella mia pagina html, con il selettore semplice tag h1
// let h1 = document.querySelector('h1');

// console.dir(h1);

// è come se avessimo:
// h1 = {
//     'style' :{
//         'color' : 'black';
//     }
//  }

// voglio addentrarmi dentro l'h1, che è un oggetto, arrivare alla sua proprietà color e modificarla in rosso

// h1.style.color = 'red';
// e se volessi cambiare il background color?
// h1.style.backgroundColor = 'cyan';

// ATTENZIONE! Quando usiamo questa sintassi, verrà applicato dello style in linea ai nostri elementi HTML.


// se abbiamo più paragrafi in html e sfruttiamo il querySelector che può prendere un solo elemento, andrà a catturare sempre il primo che incontra e basta.
// let paragraph = document.querySelector('#thirdParagraph');
// console.dir(paragraph);
// voglio, tramite la proprietà classList, assegnare o rimuovere delle classi CSS.

// le funzioni che ci interessano di classList
// .add()
// add aggiunge una o più classi da un oggetto. Funziona esattamente come il metodo push, nel senso che mette in coda una o più classi, l'importante è che queste classi vengano scritte sottoforma di stringa.

// .remove()
// remove rimuove una o più classi da un oggetto... tutto il resto è uguale ad add

// .toggle()
// dentro ha una condizione if/else -> lui ragiona così: ce l'ha la classe? allora gliela tolgo. oppure, non ce l'ha la classe? allora gliel'aggiungo
// il toggle accetta solo una classe per volta nelle tonde

// aggiungiamo un colore al testo e un background-color di sfondo
// paragraph.classList.add('paragraphColor', 'paragraphBackground');

// qui stiamo rimuovendo colore al testo
// paragraph.classList.remove('paragraphColor');

// con toggle, siccome il colore al testo non ce l'aveva, glielo sta aggiungendo
// paragraph.classList.toggle('paragraphColor');
// cono toggle, siccome il colore di sfondo lo aveva, glielo sta togliendo
// paragraph.classList.toggle('paragraphBackground');


// let third = document.querySelector('#third');

// let changeParagraphColor = document.querySelector('#changeParagraphColor');

// changeParagraphColor.addEventListener('click', ()=>{
//     third.style.color = 'red';
//     third.classList.add('paragraphBackground');

//     per togliere e aggiungere al click
//     third.classList.toggle('paragraphBackground');
// });

//  e se uso la sintassi con style, come faccio ad aggiungere e togliere qualcosa?

// per far questo sfruttiamo una variabile d'appoggio che ci servirà come condizione dell'if/else che sfrutteremo nella funzione.

// let appoggio = true;

// changeParagraphColor.addEventListener('click', ()=>{

//     if(appoggio == true){
//         third.style.color = 'red';
//         appoggio = false;
//     }else {
//         third.style.color = 'black';
//         appoggio = true;
//     }
     
// });

// voglio colorare tutti i paragrafi al click sul bottone

// let paragraphs = document.querySelectorAll('.paragraph');

// let changeColorButton = document.querySelector('#changeColorButton');

// console.log(paragraphs);

// attacchiamo un ascoltatore di eventi al bottone e diciamo che al click i paragrafi devono cambiar colore

// changeColorButton.addEventListener('click', ()=>{

    // devo dire ad ogni singolo elemento che si trova dentro paragraphs (nonché una NodeList) fai cambiare il colore

//     paragraphs.forEach((paragrafo)=>{
//          paragrafo.classList.toggle('paragraphBackground');
//     });
   
// });

// adesso voglio che i paragrafi abbiano tutti un colore casuale ad ogni click

// changeColorButton.addEventListener('click', ()=>{

    // devo dire ad ogni singolo elemento che si trova dentro paragraphs (nonché una NodeList) fai cambiare il colore

    // voglio calcolare 3 parametri casuali da 0 a 255 perché l'rgb ha 3 caratteri numerici

  

//     paragraphs.forEach((paragrafo)=>{

//           let r = Math.floor(Math.random() * (255) + 1);
//           let g= Math.floor(Math.random() * (255) + 1);
//           let b = Math.floor(Math.random() * (255) + 1);
//           let alpha = Math.random();

//         paragrafo.style.backgroundColor = `rgb(${r},${g},${b},${alpha})`;
//     });
   
// });



// let h1 = document.querySelector('h1');

// h1.innerHTML = 'Donato';


// let ulContainer = document.querySelector('#ulContainer');

// quando voglio modificare tutto il contenuto html uso backtick e vado a capo
// ulContainer.innerHTML = `
//         <li>Primo</li>
//         <li>Secondo</li>
//         <li>Terzo</li>
// `;

// NON VA BENE!!! volevo aggiungere quarto agli altri e non avere solo lui!
// ulContainer.innerHTML = `
//     <li>Quarto</li>
// `;

// catturiamo il contenitore
// let ulContainer = document.querySelector('#ulContainer');

// creiamo il tag li
// let listItem = document.createElement('li');

// riempiamo il tag li con la scritta Valerio
// listItem.innerHTML = 'Valerio';

// appendiamo il listItem completo al padre
// ulContainer.appendChild(listItem);


// se invece ho una lista di nomi da trasformare in list item

// let names = ['Valerio', 'Angelo', 'Elisa', 'Diana', 'Lorenzo'];

// let ulContainer = document.querySelector('#ulContainer');

// devo ciclare sull'array names, per creare in dinamica i list item
// names.forEach((nome)=>{

//     let listItem = document.createElement('li');
//     listItem.innerHTML = nome;
//     ulContainer.appendChild(listItem);

// });


