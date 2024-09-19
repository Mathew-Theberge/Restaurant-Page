import "./style.css"
import { renderHomePage} from "./home"
import {renderMenuPage} from "./menu.js"

export const content = document.querySelector("#content")
export const homeBtn = document.querySelector(".homeBtn")
export const menuBtn = document.querySelector(".menuBtn")
export const aboutBtn = document.querySelector(".aboutBtn")


renderHomePage()

homeBtn.addEventListener("click", renderHomePage)

menuBtn.addEventListener("click", renderMenuPage)