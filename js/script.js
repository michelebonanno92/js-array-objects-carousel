
/* 
Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

 */

/* 

 */


// queryselector prende il primo elemento che soddisfa una determinata condizione ( il primo elemento di una classe)
const imgContainer = document.querySelector('.img-container');
console.log('imgContainer', imgContainer, typeof imgContainer);


// array contenitore delle immaggini 
// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

console.log(images)

for (let i = 0; i < images.length; i++){
console.log(images[i]);
    if ( i == 0) {
         imgContainer.innerHTML += `<img src="${images[i]}" class="active">`;
    }
    else{
        imgContainer.innerHTML += `<img src="${images[i]}">`;
    }
}

// query selectorall prende un array di elementi che soddisfano una  condizione 
const allimgs = document.querySelectorAll('.img-container > img');
console.log('allimgs', allimgs, typeof allimgs);

// const firstImg = document.querySelector('.img-container > img');
// console.log('firstImg', firstImg, typeof firstImg);

// const lastImg = document.querySelector('.img-container > img' + 4);
// console.log('lastImg', lastImg, typeof lastImg);

let activeImg = 0;

const nexButton = document.getElementById('next-button');
nexButton.addEventListener('click', function () {
    allimgs[activeImg].classList.remove('active');

    if (activeImg < (images.length - 1)){
        activeImg++;
    }
    else{
        activeImg = 0 ;
    }
    allimgs[activeImg].classList.add('active');
});

const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', function () {
    allimgs[activeImg].classList.remove('active');

    if (activeImg > 0){
        activeImg --;
    }
    else{
        activeImg = images.length - 1 ; 
        // o scrivendo 4  
    }
    allimgs[activeImg].classList.add('active');
});


