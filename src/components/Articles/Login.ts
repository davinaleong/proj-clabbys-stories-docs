import img0005 from "./../../assets/images/0005.png"
import DividerArticle from "./../Dividers/Article"

export default function ArticleLogin(): string {
  return `
        <article id="login" class="flow">
            <h3 class="text-xl font-serif font-semibold">Login</h3>
            <p><strong>Prerequisites:</strong></p>
            <ul class="list-disc pl-5">
                <li>Link to the Editor</li>
                <li>Login information</li>
            </ul>
    
            <p><strong>Steps:</strong></p>
            <ol class="list-decimal pl-5">
                <li>Enter the login information and select <strong>Log In</strong>.</li>
            </ol>
    
            <img src="${img0005}" alt="Screenshot 0005" class="rounded-sm shadow-md">

            ${DividerArticle()}
            
            <hr>
        </article>
    `
}
