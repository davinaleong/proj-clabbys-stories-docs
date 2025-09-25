import img0014 from "./../../assets/images/0014.png"
import img0015 from "./../../assets/images/0015.png"
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

            <h4 id="archives-main" class="font-serif font-semibold">Main Page</h4>
            <p>The main Archives page lists all of your archived galleries.</p>
            <img src="${img0014}" alt="Screenshot 0014" class="rounded-sm shadow-md">

            <h4 id="archives-restore" class="font-serif font-semibold">Restoring an Archive</h4>
            <p><strong>Steps:</strong></p>
            <ol class="list-decimal list-inside">
                <li>Select <strong>Archives</strong>.</li>
                <li>Select the <strong>archive you want to restore</strong>.</li>
                <li>Select <strong>Restore</strong>.</li>
                <li>Select <strong>Galleries</strong>.</li>
                <li>You should see the <strong>restored Gallery</strong>.</li>
            </ol>
            <img src="${img0015}" alt="Screenshot 0015" class="rounded-sm shadow-md">

            <h4 id="archives-delete" class="font-serif font-semibold">Permanently Deleting an Archive</h4>
            <p><strong>Steps:</strong></p>
            <ol class="list-decimal list-inside">
                <li>Select <strong>Archives</strong>.</li>
                <li>Select the <strong>archive you want to restore</strong>.</li>
                <li>Select <strong>Delete Permanently</strong>.</li>
                <li>The current Gallery should be deleted and you should be <strong>redirected to Galleries</strong>.</li>
            </ol>
            <img src="${img0015}" alt="Screenshot 0015" class="rounded-sm shadow-md">

            ${DividerArticle()}
                    
            <hr>
        </article>
    `
}
