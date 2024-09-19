import {content} from "./index.js"
import {menuBtn, homeBtn, aboutBtn} from "./index.js"
import chickenWings from "./images/chicken-wings.jpg"
import burger from "./images/burger.jpg"
import pizza from "./images/pizza.jpg"
import ramen from "./images/ramen.jpg"
import steak from "./images/steak.jpg"
import sushi from "./images/sushi.jpg"

const imageReferanceArray = [burger, pizza, steak, chickenWings, sushi, ramen]

const card1 = document.createElement("div")
const card2 = document.createElement("div")
const card3 = document.createElement("div")
const card4 = document.createElement("div")
const card5 = document.createElement("div")
const card6 = document.createElement("div")

const cardArray = [card1, card2, card3, card4, card5, card6]

const img1 = document.createElement("img")
const img2 = document.createElement("img")
const img3 = document.createElement("img")
const img4 = document.createElement("img")
const img5 = document.createElement("img")
const img6 = document.createElement("img")

const imgArray = [img1, img2, img3, img4, img5, img6]

const title1 = document.createElement("div")
const title2 = document.createElement("div")
const title3 = document.createElement("div")
const title4 = document.createElement("div")
const title5 = document.createElement("div")
const title6 = document.createElement("div")

const titleArray = [title1, title2, title3, title4, title5, title6]

const cost1 = document.createElement("div")
const cost2 = document.createElement("div")
const cost3 = document.createElement("div")
const cost4 = document.createElement("div")
const cost5 = document.createElement("div")
const cost6 = document.createElement("div")

const costArray = [cost1, cost2, cost3, cost4, cost5, cost6]

const calories1 = document.createElement("div")
const calories2 = document.createElement("div")
const calories3 = document.createElement("div")
const calories4 = document.createElement("div")
const calories5 = document.createElement("div")
const calories6 = document.createElement("div")

const calorieArray = [calories1, calories2, calories3, calories4, calories5, calories6]


export function renderMenuPage() {
    content.replaceChildren()
    content.setAttribute("class", "menu")

    img1.setAttribute("alt", "burger and fries")
    title1.textContent = "Burger & fries"
    cost1.textContent = "$13"
    calories1.textContent = "1100 calories"

    img2.setAttribute("alt", "pizza")
    title2.textContent = "Pizza"
    cost2.textContent = "$15"
    calories2.textContent = "1500 calories"

    img3.setAttribute("alt", "steak, fries and greens")
    title3.textContent = "Steak, fries & greens"
    cost3.textContent = "$25"
    calories3.textContent = "950 calories"

    img4.setAttribute("alt", "chicken wings")
    title4.textContent = "Chicken wings"
    cost4.textContent = "$18"
    calories4.textContent = "800 calories"

    img5.setAttribute("alt", "sushi")
    title5.textContent = "Sushi"
    cost5.textContent = "$20"
    calories5.textContent = "500 calories"

    img6.setAttribute("alt", "bowl of ramen")
    title6.textContent = "Ramen"
    cost6.textContent = "$14"
    calories6.textContent = "750 calories"

    for (let i = 0; i < 6; i++) {
        imgArray[i].setAttribute("width", "300px")
        imgArray[i].setAttribute("height", "200px")
        imgArray[i].src = imageReferanceArray[i]
        cardArray[i].setAttribute("class", "card")
        cardArray[i].append(imgArray[i], titleArray[i], costArray[i], calorieArray[i])
        content.append(cardArray[i])
    }

    homeBtn.removeAttribute("class", "active")
    aboutBtn.removeAttribute("class", "active")
    menuBtn.setAttribute("class", "active")
}