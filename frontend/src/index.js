const BASE_URL = "http://localhost:3000"
const GIFTS_URL = `${BASE_URL}/gifts`
const giftCollection = document.querySelector('#gift-collection')
const likeButton = document.querySelector('.like-btn')

// JS file was required at bottom of HTML file so no need for DOMContentLoaded
function putGiftsOnDom(giftArray){
    giftArray.forEach(gift => {
        giftCollection.innerHTML += `<div class="card">
          <h2>${gift.title} ($${gift.price})</h2>
          <h4>${gift.category}</h4>
          <p>${gift.description}<p>
          <a href=${gift.link}><img src=${gift.image} class="gift-image" /></a>
          <button data-gift-id=${gift.id} class="like-btn">Like <3</button>
        </div>`
    })
}

function fetchGifts(){
    fetch(GIFTS_URL)
    .then(res => res.json())
    .then(gifts => putGiftsOnDom(gifts))
}

fetchGifts()
