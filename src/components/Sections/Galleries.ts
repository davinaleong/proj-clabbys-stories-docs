import Menu from "./../Menu"
import ArticlePublic from "./../Articles/Public"
import ArticlePublished from "./../Articles/Published"
import ArticleSlideshow from "./../Articles/Slideshow"
import DividerSection from "./.././Dividers/Section"

const ariaLabel: string = "Galleries Menu"
const liList: string = `
    <li><a href="#public-galleries" class="underline hover:opacity-70">Public Galleries</a></li>
    <li><a href="#published-galleries" class="underline hover:opacity-70">Published (Private) Galleries</a></li>
    <li><a href="#slideshow-galleries" class="underline hover:opacity-70">Slideshow Galleries</a></li>
`
const navMenu: string = Menu(liList, ariaLabel)

export default function SectionGalleries(): string {
  return `
    <section id="galleries" class="flow">
        <h2 class="text-2xl font-serif font-semibold">Galleries</h2>

        ${navMenu}

        <hr>
        
        ${ArticlePublic()}
        ${ArticlePublished()}
        ${ArticleSlideshow()}

        ${DividerSection()}
    </section>

    `
}
