import img0016 from "./../../assets/images/0016.png"
import DividerArticle from "../Dividers/Article"

export default function ArticleSettings(): string {
  return `
        <article id="editor-settings" class="flow">
            <h3 class="text-xl font-serif font-semibold">Settings</h3>

            <p><strong>Fields:</strong></p>
            <ol class="list-decimal list-inside">
                <li><strong>App Name</strong>: Change the name of the application.</li>

                <li>
                    <strong>Default Sort Order</strong>: Choose how galleries are ordered on the Galleries page.
                    <ul class="list-disc pl-10 space-y-1">
                        <li>Newest first</li>
                        <li>Oldest first</li>
                        <li>Alphabetical (A–Z)</li>
                        <li>Alphabetical (Z–A)</li>
                    </ul>
                </li>

                <li>
                    <strong>Default Date Format</strong>: Define how dates are displayed across the application.
                    <ul class="list-disc pl-10 space-y-1 mt-2">
                        <li><b>EEE_D_MMM_YYYY</b> → <i>Sun, 20 Jul 2025</i></li>
                        <li><b>EEEE_D_MMM_YYYY</b> → <i>Sunday, 20 Jul 2025</i></li>
                        <li><b>EEEE_D_MMMM_YYYY</b> → <i>Sunday, 20 July 2025</i></li>
                        <li><b>D_MMM_YYYY</b> → <i>20 Jul 2025</i></li>
                        <li><b>D_MMMM_YYYY</b> → <i>20 July 2025</i></li>
                        <li><b>D_MMM</b> → <i>20 Jul</i></li>
                        <li><b>D_MMMM</b> → <i>20 July</i></li>
                    </ul>
                </li>

                <li><strong>Export Data</strong>: Export gallery data to Excel. (Note: photos are not included.)</li>
                <li><strong>Logout</strong>: Log out of the Editor.</li>
            </ol>

            <img src="${img0016}" alt="Settings Page Screenshot" class="rounded-sm shadow-md">
            
            ${DividerArticle()}
                
            <hr>
        </article>
    `
}
