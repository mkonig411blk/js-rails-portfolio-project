// JS file was required at bottom of HTML file so no need for DOMContentLoaded
const BASE_URL = "http://localhost:3000"
const GIFTS_URL = `${BASE_URL}/gifts`
const USERS_URL = `${BASE_URL}/users`
const FAVORITES_URL = `${BASE_URL}/favorites`
const giftCollection = document.querySelector('#gift-collection')
const likeButton = document.querySelector('.like-btn')
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const header = document.querySelector('.header-banner')
const favCollection = document.querySelector('#fav-collection')
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

// only show gifts that have been favorited by this user
// all heart buttons should be red
function putFavoritesOnDom(favArray){
    // favCollection is null
    favCollection.innerHTML = "<h2>My Favorites</h2>"
    favArray.forEach(gift => {
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

// is this the point where we only fetch favorites by current user?
function fetchFavorites(){
    fetch(FAVORITES_URL)
    .then(res => res.json())
    .then(favorites => putFavoritesOnDom(favorites))
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
        // getting error here
    )
})

// is it correct to link favorites to a new html file?
function loggedInUser(object){
    currentUser = object
    signupForm.style.display = 'none'
    welcome.innerHTML = `<h4>Welcome back, ${currentUser.name}!</h4>`
    header.innerHTML = `<a href="favorite.html" class="favorites-link">View only my Favorites</a>`
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
    // .then(res => res.json())
    // .then(function(object){
    //     console.log(object)
    // })
    event.target.style.color = '#FF0000';}
    else if ((event.target.className == "like-btn") && (event.target.style.color == '#FF0000')) {
        event.target.style.color = '#000000';
        // how do i grab the favorite_id that i want to delete?
        fetch(FAVORITES_URL + '/' + `${event.target.dataset.giftId}`, {
            method: "DELETE",
            // headers: {
            //     "Content-Type": "application/json",
            //     Accept: "application/json"
            // },
        })
    }
})


// how do I have login option? is this necessary?
// fetchGifts()
