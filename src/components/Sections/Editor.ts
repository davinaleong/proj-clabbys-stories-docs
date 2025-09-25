import img0005 from "./../../assets/images/0005.png"
import ArticleLogin from "./../Articles/Login"
import ArticleGalleries from "./../Articles/Galleries"
import ArticleFaq from "./../Articles/Faq"
import DividerSection from "./../Dividers/Section"

export default function SectionEditor(): string {
  return `
    <section id="editor" class="flow"></section>
        <h2 class="text-2xl font-serif font-semibold">Editor</h2>
        
        <nav aria-label="Galleries Menu" class="bg-neutral-200 p-2 rounded-sm">
            <menu class="flex flex-wrap gap-4 list-none">
                <li><a href="#login" class="underline hover:opacity-70">Login</a></li>
                <li><a href="#galleries" class="underline hover:opacity-70">Galleries</a></li>
                <li><a href="#archives" class="underline hover:opacity-70">Archives</a></li>
                <li><a href="#settings" class="underline hover:opacity-70">Settings</a></li>
                <li><a href="#faq" class="underline hover:opacity-70">FAQ</a></li>
            </menu>
        </nav>

        ${ArticleLogin}
        ${ArticleGalleries()}

        <h3 id="archives" class="text-xl font-serif font-semibold">Archives</h3>

        <hr>

        <h3 id="settings" class="text-xl font-serif font-semibold">Settings</h3>

        <hr>

        ${ArticleFaq()}
        
        ${DividerSection()}
    </section>
    `
}
