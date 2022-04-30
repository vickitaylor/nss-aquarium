// importing the function that retuns a copy of the array 
import { getFish } from "./database.js";    

export const fishList = () => { 
    // invoking the function imported from database module 
    const fishes = getFish()
    // creating HTML string 
    let htmlString = `<article class="fishList`
    // for loop that creates a HTML representation of each fish 
    for (const fish of fishes) {
        htmlString += `<section class= "fish_card">
            <div><img class ="fish__image-image--card" src="${fish.image}"/></div>
            <div class="fish__name">Fish Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__size">${fish.size} inches long</div>
            <div class="fish__location">Located: ${fish.location}</div>
            <div class="fish__food">Diet: ${fish.food}</div>
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}

