import img0017 from "./../assets/images/0017.png"

export default function Editor(): string {
  return `
    <section id="editor" class="flow"></section>
        <h2 class="text-2xl font-serif font-semibold">Editor</h2>
        
        <nav aria-label="Galleries Menu">
            <menu class="list-disc list-inside">
                <li><a href="#galleries"
                class="underline hover:opacity-70">Galleries</a></li>
                <li><a href="#archives" class="underline hover:opacity-70">Archives</a></li>
                <li><a href="#settings" class="underline hover:opacity-70">Settings</a></li>
                <li><a href="#faq" class="underline hover:opacity-70">FAQ</a></li>
            </menu>
        </nav>

        <hr>

        <h3 id="galleries" class="text-xl font-serif font-semibold">Galleries</h3>

        <hr>

        <h3 id="archives" class="text-xl font-serif font-semibold">Archives</h3>

        <hr>
        <h3 id="settings" class="text-xl font-serif font-semibold">Settings</h3>

        <hr>

        <h3 id="faq" class="text-xl font-serif font-semibold">FAQ</h3>
        <p>The FAQ page provides a quick reference on how to use the Editor.</p>

        <img src="${img0017}" alt="Screenshot 0017" class="rounded-sm shadow-md">

        <p class="text-center text-sm">
            <em>&ndash; End of Section &ndash;</em>
        </p>
    </section>
    `
}
