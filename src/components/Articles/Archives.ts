import img0014 from "./../../assets/images/0014.png"
import img0015 from "./../../assets/images/0015.png"
import Menu from "./../Menu"
import Contents from "./../Contents"
import DividerArticle from "../Dividers/Article"

const ariaLabel: string = "Editor Menu - Archives Submenu"
const menuLiList: string = `
    <li><a href="#archives-main" class="underline hover:opacity-70">Main Page</a></li>
    <li><a href="#archives-restore" class="underline hover:opacity-70">Restore an Archive</a></li>
    <li><a href="#archives-delete" class="underline hover:opacity-70">Permanently Delete an Archive</a></li>
`

const contentLiList: string = `
    <li><a href="#archives-main">Main Page</a>,</li>
    <li><a href="#archives-restore">Restore an Archive</a>,</li>
    <li><a href="#archives-delete">Permanently Delete an Archive</a></li>
`

const menu: string = Menu(menuLiList, ariaLabel)
const contents: string = Contents(contentLiList, ariaLabel)

export default function ArticleRestore(): string {
  return `
        <article id="editor-archives" class="flow">
            <h3 class="text-xl font-serif font-semibold">Archives</h3>

            ${menu}
            ${contents}

            <hr>

            <h4 id="archives-main" class="font-serif font-semibold">Main Page</h4>
            <p>The Archives page displays a list of all galleries that have been archived.</p>
            <img src="${img0014}" alt="Archives Main Page Screenshot" class="rounded-sm shadow-md">

            <h4 id="archives-restore" class="font-serif font-semibold">Restore an Archive</h4>
            <p><strong>Steps:</strong></p>
            <ol class="list-decimal pl-5">
                <li>Open the <strong>Archives</strong> page.</li>
                <li>Select the <strong>archive you want to restore</strong>.</li>
                <li>Select <strong>Restore</strong>.</li>
                <li>Return to the <strong>Galleries</strong> page.</li>
                <li>You should now see the <strong>restored gallery</strong>.</li>
            </ol>
            <img src="${img0015}" alt="Restore Archive Screenshot" class="rounded-sm shadow-md">

            <h4 id="archives-delete" class="font-serif font-semibold">Permanently Delete an Archive</h4>
            <p><strong>Steps:</strong></p>
            <ol class="list-decimal pl-5">
                <li>Open the <strong>Archives</strong> page.</li>
                <li>Select the <strong>archive you want to delete</strong>.</li>
                <li>Select <strong>Delete Permanently</strong>.</li>
                <li>The selected gallery will be permanently removed and you will be redirected to the <strong>Galleries</strong> page.</li>
            </ol>
            <img src="${img0015}" alt="Delete Archive Screenshot" class="rounded-sm shadow-md">

            ${DividerArticle()}
                    
            <hr>
        </article>
    `
}
