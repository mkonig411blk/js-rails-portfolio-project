// JS file was required at bottom of HTML file so no need for DOMContentLoaded
const BASE_URL = "http://localhost:3000"
const GIFTS_URL = `${BASE_URL}/gifts`
const USERS_URL = `${BASE_URL}/users`
const FAVORITES_URL = `${BASE_URL}/favorites`
const giftCollection = document.querySelector('#gift-collection')
const likeButton = document.querySelector('.like-btn')
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
let currentUser


function putGiftsOnDom(giftArray){
    giftCollection.innerHTML = "<h2>All Gift Ideas</h2>"
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

function fetchFavorites(){

}

signupForm.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            user: {
                name: signupInputs[0].value,
                email: signupInputs[1].value,
                password: signupInputs[2].value
            }
        })
    })
    .then(res => res.json())
    .then(function(object){
        if (object.message) {
            alert(object.message)
        } else {
        loggedInUser(object)
        }
        end }
    )
})

function loggedInUser(object){
    currentUser = object
    signupForm.style.display = 'none'
    welcome.innerText = `Welcome back, ${currentUser.name}!`
    fetchGifts()
    fetchFavorites()
}


giftCollection.addEventListener('click', function(e){
    e.preventDefault()
    if ((event.target.className == "like-btn") && (event.target.style.color !== '#FF0000')) {
    fetch(FAVORITES_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            favorite: {
                user_id: `${currentUser.id}`,
                gift_id: `${event.target.dataset.giftId}`
            }
        })
    })
    .then(res => res.json())
    .then(function(object){
        console.log(object)
    })
    event.target.style.color = '#FF0000';}
    // else if ((event.target.className == "like-btn") && (event.target.style.color == '#FF0000')) {
    //     event.target.style.color = '#000000';
    // }
})



fetchGifts()
