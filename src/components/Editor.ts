import img0005 from "./../assets/images/0005.png"
import Galleries from "./Editor/Galleries"
import Faq from "./Editor/Faq"
import SectionDivider from "./SectionDivider"

export default function Editor(): string {
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

        <hr>

        <h3 id="login" class="text-xl font-serif font-semibold">Login</h3>
        <p><strong>Prerequisites:</strong></p>
        <ul class="list-disc list-inside">
            <li>Link to the Editor</li>
            <li>Login information</li>
        </ul>

        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Enter the login information and select <strong>Log In</strong>.</li>
        </ol>

        <img src="${img0005}" alt="Screenshot 0005" class="rounded-sm shadow-md">

        <hr>

        ${Galleries()}

        <h3 id="archives" class="text-xl font-serif font-semibold">Archives</h3>

        <hr>

        <h3 id="settings" class="text-xl font-serif font-semibold">Settings</h3>

        <hr>

        ${Faq()}
        
        ${SectionDivider()}
    </section>
    `
}
