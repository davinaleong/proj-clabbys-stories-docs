import img0002 from "./../../assets/images/0002.png"
import img0003 from "./../../assets/images/0003.png"
import DividerArticle from "./../Dividers/Article"

export default function ArticlesPublic(): string {
  return `
        <article id="public-galleries" class="flow">
            <h3 class="text-xl font-serif font-semibold">Public Galleries</h3>
            <p>Public galleries are accessible to anyone who has the link.</p>

            <p><strong>Prerequisites:</strong></p>
            <ul class="list-disc list-inside">
                <li>Gallery link</li>
            </ul>

            <p><strong>Steps:</strong></p>
            <p>Open the gallery link.</p>
            <p>Browse through the available photos.</p>
            <img src="${img0002}" alt="Screenshot 0002" class="rounded-sm shadow-md">
            
            <p>Select a photo to view a larger version. You can also view its metadata, such as the title, description, and date.</p>
            <img src="${img0003}" alt="Screenshot 0003" class="rounded-sm shadow-md">

            ${DividerArticle()}

            <hr>
        </article>
    `
}
