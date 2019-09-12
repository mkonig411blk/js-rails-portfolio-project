const BASE_URL = "http://localhost:3000"
const GIFTS_URL = `${BASE_URL}/gifts`
const giftCollection = document.querySelector('#gift-collection')
const likeButton = document.querySelector('.like-btn')

// JS file was required at bottom of HTML file so no need for DOMContentLoaded
function putGiftsOnDom(giftArray){
    giftArray.forEach(gift => {
        giftCollection.innerHTML += `<div class="card">
          <h2>${gift.title} ($${gift.price})</h2>
          <h4 class="gift-cat">${gift.category}</h4>
          <a href=${gift.link} target="_blank"><img src=${gift.image} class="gift-image" /></a>
          <p>${gift.description}<p>
          <button data-gift-id=${gift.id} class="like-btn">♡</button>
        </div>`
    })
}

function fetchGifts(){
    fetch(GIFTS_URL)
    .then(res => res.json())
    .then(gifts => putGiftsOnDom(gifts))
}

fetchGifts()
