import Menu from "./../Menu"
import ArticleLogin from "./../Articles/Login"
import ArticleGalleries from "./../Articles/Galleries"
import ArticleArchives from "./../Articles/Archives"
import ArticleSettings from "../Articles/Settings"
import ArticleFaq from "./../Articles/Faq"
import DividerSection from "./../Dividers/Section"

const ariaLabel: string = "Editor Menu"
const liList: string = `
    <li><a href="#login" class="underline hover:opacity-70">Login</a></li>
    <li><a href="#galleries" class="underline hover:opacity-70">Galleries</a></li>
    <li><a href="#archives" class="underline hover:opacity-70">Archives</a></li>
    <li><a href="#settings" class="underline hover:opacity-70">Settings</a></li>
    <li><a href="#faq" class="underline hover:opacity-70">FAQ</a></li>
`
const navMenu: string = Menu(liList, ariaLabel)

export default function SectionEditor(): string {
  return `
    <section id="editor" class="flow"></section>
        <h2 class="text-2xl font-serif font-semibold">Editor</h2>
        
        ${navMenu}

        <hr>

        ${ArticleLogin()}
        ${ArticleGalleries()}
        ${ArticleArchives()}
        ${ArticleSettings()}
        ${ArticleFaq()}
        
        ${DividerSection()}
    </section>
    `
}
