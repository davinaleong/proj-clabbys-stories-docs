import "./style.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="relative">
    ${Header()}
    ${Main()}
    ${Footer()}
  </div>
`
