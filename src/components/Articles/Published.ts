import img0001 from "./../../assets/images/0001.png"
import img0002 from "./../../assets/images/0002.png"
import img0003 from "./../../assets/images/0003.png"
import DividerArticle from "../Dividers/Article"

export default function ArticlePublished(): string {
  return `
        <article id="published-galleries" class="flow">
            <h3 class="text-xl font-serif font-semibold">Published (Private) Galleries</h3>
            <p>Published (private) galleries are accessible to those who have both the link and the passphrase.</p>

            <p><strong>Prerequisites:</strong></p>
            <ul class="list-disc list-inside">
                <li>Gallery link</li>
                <li>Gallery passphrase</li>
            </ul>

            <p><strong>Steps:</strong></p>
            <p>Open the gallery link.</p>
            <p>Enter the passphrase when prompted.</p>
            <img src="${img0001}" alt="Screenshot 0001" class="rounded-sm shadow-md">

            <p>Browse through the available photos.</p>
            <img src="${img0002}" alt="Screenshot 0002" class="rounded-sm shadow-md">
            
            <p>Select a photo to view a larger version. You can also view its metadata, such as the title, description, and date.</p>
            <img src="${img0003}" alt="Screenshot 0003" class="rounded-sm shadow-md">

            ${DividerArticle()}

            <hr>
        </article>
    `
}
