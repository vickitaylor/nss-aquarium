import { getFish } from './database.js'
import { fishList } from './fishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = fishList()