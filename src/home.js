import fineDiningImage from "./images/fine-ding.png"
const content = document.querySelector("#content")
const para = document.createElement("p")
const button = document.createElement("button")
const img = document.createElement("img")

export function renderHomePage() {
    if (para.textContent !== "My Awesome dine in Restaurant") {
        para.textContent = "My Awesome dine in Restaurant"
        button.textContent = "Order Now"
        img.setAttribute("height", "550px")
        img.setAttribute("width", "auto")
        img.setAttribute("alt", "")
        img.src = fineDiningImage
        content.append(para)
        content.append(button)
        content.append(img)
    }
}