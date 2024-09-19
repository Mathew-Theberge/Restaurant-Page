import {content} from "./index.js"
import {menuBtn, homeBtn, aboutBtn} from "./index.js"
import aboutImage from "./images/about.jpg"


const mainHeading = document.createElement("h1")
const subHeading = document.createElement("h2")
const para1 = document.createElement("p")
const img = document.createElement("img")
const subHeading2 = document.createElement("h3")
const para2 = document.createElement("p")
const para3 = document.createElement("p")
const container1 = document.createElement("div")
const container2 = document.createElement("div")
const container3 = document.createElement("div")

export function renderAboutPage() {
    content.replaceChildren()
    content.setAttribute("class", "about")
    mainHeading.textContent = "Fancy name"
    subHeading.textContent = "our story - from the start"
    para1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra massa eget velit venenatis, id pulvinar mauris bibendum. Nullam tempor sed risus nec faucibus justo enim ante dui"
    img.src = aboutImage
    img.setAttribute("width", "500px")
    img.setAttribute("alt", "")
    subHeading2.textContent = "an actractive subheading"
    para2.textContent = "Proin dignissim tellus justo, sed pulvinar sem laoreet at. Curabitur luctus congue arcu vitae accumsan. Nulla gravida, turpis nec lobortis condimentum, justo enim rutrum ante, in blandit nisl justo a massa. Nam non massa et libero bibendum venenatis in quis magna. Nullam at vehicula nisl."
    para3.textContent = "Fusce rutrum eros nisl, quis auctor justo fermentum sit amet. Aenean tincidunt eu orci non dignissim. Donec posuere, metus ac dictum euismod, nibh erat pulvinar dui, in vestibulum purus lacus eget mi. Duis nec interdum massa. Aliquam tempus, massa et condimentum aliquam, augue orci mattis ante, eget mollis felis tellus a ligula. Maecenas id erat tellus. Aenean semper purus nunc, nec tristique mi rhoncus id."
    container1.append(subHeading, para1)
    container2.append(subHeading2, para2, para3)
    container3.append(img, container2)
    content.append(mainHeading, container1, container3)

    homeBtn.removeAttribute("class", "active")
    menuBtn.removeAttribute("class", "active")
    aboutBtn.setAttribute("class", "active")
}