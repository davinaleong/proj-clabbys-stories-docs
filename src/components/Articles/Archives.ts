import Menu from "./../Menu"
import DividerArticle from "../Dividers/Article"

const ariaLabel: string = "Editor Menu - Archives Submenu"
const liList: string = `
    <li><a href="#archives-main" class="underline hover:opacity-70">Main Page</a></li>
    <li><a href="#archives-restore" class="underline hover:opacity-70">Restoring an Archive</a></li>
    <li><a href="#archives-delete" class="underline hover:opacity-70">Permanently Deleting an Archive</a></li>
`
const navMenu: string = Menu(liList, ariaLabel)

export default function ArticleRestore(): string {
  return `
        <article id="editor-archives" class="flow">
            <h3 class="text-xl font-serif font-semibold">Archives</h3>

            ${navMenu}

            <hr>

            ${DividerArticle()}
                    
            <hr>
        </article>
    `
}
