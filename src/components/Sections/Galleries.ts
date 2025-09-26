import Menu from "./../Menu"
import Contents from "./../Contents"
import ArticlePublic from "./../Articles/Public"
import ArticlePublished from "./../Articles/Published"
import ArticleSlideshow from "./../Articles/Slideshow"
import DividerSection from "./.././Dividers/Section"

const ariaLabel: string = "Galleries Menu"
const menuLiList: string = `
    <li><a href="#public-galleries" class="underline hover:opacity-70">Public Galleries</a></li>
    <li><a href="#published-galleries" class="underline hover:opacity-70">Published (Private) Galleries</a></li>
    <li><a href="#slideshow-galleries" class="underline hover:opacity-70">Slideshow Galleries</a></li>
`
const contentsLiList: string = `
    <li><a href="#public-galleries">Public Galleries</a>,</li>
    <li><a href="#published-galleries">Published (Private) Galleries</a>,</li>
    <li><a href="#slideshow-galleries">Slideshow Galleries</a></li>
`
const menu: string = Menu(menuLiList, ariaLabel)
const contents: string = Contents(contentsLiList, ariaLabel)

export default function SectionGalleries(): string {
  return `
    <section id="galleries" class="flow">
        <h2 class="text-2xl font-serif font-semibold">Galleries</h2>

        ${menu}
        ${contents}

        <hr>
        
        ${ArticlePublic()}
        ${ArticlePublished()}
        ${ArticleSlideshow()}

        ${DividerSection()}
    </section>

    `
}
