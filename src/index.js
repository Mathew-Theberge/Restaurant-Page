import "./style.css"
import { renderHomePage } from "./home"

renderHomePage()

const button = document.querySelector(".homeBtn")

button.addEventListener("click", renderHomePage)