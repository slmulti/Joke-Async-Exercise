// const fetch = require('isomorphic-fetch')
const baseURL = 'https://v2.jokeapi.dev/joke/Any?'

const safeMode = "safe-mode"
const frenchMode = "lang=fr"


let setupHTML = document.getElementById('setup')
let deliveryHTML = document.getElementById('delivery')


const fetchJokes = async (event) => {

    if(event.target.id==='safeModeButton'){
        const response = await fetch(baseURL+safeMode).then(res => res.json())
        console.log("safeMode: "+response)
        let setup = response.setup
        let delivery = response.delivery
        let joke = response.joke

        displayJokes(setup, delivery, joke)
        } else if(event.taget.id === 'frenchButton'){
            const response = await fetch(baseURL+frenchMode).then(res => res.json())
            console.log("french: "+response)
            let setup = response.setup
            let delivery = response.delivery
            let joke = response.joke
    
            displayJokes(setup, delivery, joke)
        } else {
            const response = await fetch(baseURL).then(res => res.json())
            console.log("baseURL: "+response)
            let setup = response.setup
            let delivery = response.delivery
            let joke = response.joke
    
            displayJokes(setup, delivery, joke)

        }
        
}

function displayJokes(setup,delivery,joke){
    if(setup){    
        console.log("the set up for the joke is: " + setup + " the delivery for the joke is: " + delivery)
        setupHTML.innerText = setup
        deliveryHTML.innerText = delivery
    }else{
        console.log('its just a joke: ' + joke)
        setupHTML.innerText = joke
        console.log("no punch line")
        deliveryHTML.innerText = ''
    }
}

//french joke

// const getFrenchJokes = async () => {
//     const response = await fetch(frenchURL).then(res => res.json())
//     // console.log(response)
// }



let button =document.getElementById("jokebutton")
button.addEventListener('click', fetchJokes)

let safeModeButton =document.getElementById("safeModeButton")
safeModeButton.addEventListener('click', fetchJokes)

let frenchButton =document.getElementById("frenchButton")
frenchButton.addEventListener('click', getFrenchJokes)



// put data in the variable
// isolote the information
// connect the two 
// send over the data to html 
//button to create new joke

// fetchJokes()
// getFrenchJokes()


module.exports = fetchJokes