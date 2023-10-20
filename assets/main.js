console.log('I am working babe')

const images = [

    {
        image: '/media/01.webp.jpg',
        title: 'Live Wonderful Life',
        text: 'Experience the nature of a new environment' ,
    }, {
        image: '/media/02.webp.jpg',
        title: 'Breath Clear Space',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '/media/03.webp.jpg',
        title: 'Crush Your Bycicle',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '/media/04.webp.jpg',
        title: 'Clean Your Room',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '/media/05.webp.jpg',
        title: "Do your Homeworks",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.querySelector('.carousel');

for (let i = 0; i < images.length; i++) {

    carousel.innerHTML += ` <div class="slide">
                                <div class="imgAbsolute">
                                    <img src="${images[i].image}" alt="">
                                </div>
                                <div class="description col-12  d-flex flex-column justify-content-center text-center align-items-center">
                                    <p class="title">${images[i].title}</p>
                                    <p class="text">${images[i].text}</p>
                                </div>
                            </div>`
}

const allSlide = document.querySelectorAll('.slide');

allSlide[0].classList.add('current');

let current = 0;

setInterval(function() {
         
    allSlide[current].classList.remove('current');

    if (current == allSlide.length - 1) {

        current = 0;

    } else {
    
        current = current + 1;

    }

    allSlide[current].classList.add('current');


}, 3000)

