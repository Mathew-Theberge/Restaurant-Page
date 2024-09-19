import fineDiningImage from "./images/fine-ding.png"
import {menuBtn, homeBtn, aboutBtn} from "./index.js"

const para = document.createElement("p")
const button = document.createElement("button")
const img = document.createElement("img")

export function renderHomePage() {
        content.replaceChildren()
        button.setAttribute("onclick", "location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'")
        para.textContent = "My Awesome dine in Restaurant"
        button.textContent = "Order Now"
        img.setAttribute("height", "550px")
        img.setAttribute("width", "auto")
        img.setAttribute("alt", "")
        img.src = fineDiningImage
        content.setAttribute("class", "home")
        content.append(para)
        content.append(button)
        content.append(img)
        menuBtn.removeAttribute("class", "active")
        aboutBtn.removeAttribute("class", "active")
        homeBtn.setAttribute("class", "active")
}