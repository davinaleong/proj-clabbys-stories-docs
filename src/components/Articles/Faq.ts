import img0017 from "./../../assets/images/0017.png"
import DividerArticle from "../Dividers/Article"

export default function ArticleFaq(): string {
  return `
    <article id="editor-faq" class="flow">
        <h3 class="text-xl font-serif font-semibold">FAQ</h3>
        
        <p>The FAQ section offers a quick reference guide to help you navigate and use the Editor effectively.</p>

        <img src="${img0017}" alt="FAQ Screenshot" class="rounded-sm shadow-md">

        ${DividerArticle()}
        
        <hr>
    </article>
    `
}
