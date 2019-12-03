const cardBoard = document.querySelector("#cardboard");
const images = [
    'angular.svg',
    'aurelia.svg',
    'vue.svg',
    'react.svg',
    'backbone.svg',
    'ember.svg'
];
    let cardHTML = '';

    images.forEach(img=>{
        cardHTML +=`
            <div class="memory-card" data-card="${img}"> 
                <img class="front-face" src="img/${img}">
                <img class="back-face" src="img/js-badge.svg">

             </div>
        `

    });
    cardBoard.innerHTML = cardHTML + cardHTML;

    //fim da rederização html
    