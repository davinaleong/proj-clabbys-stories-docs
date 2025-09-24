import img0001 from "./../assets/images/0001.png"
import img0002 from "./../assets/images/0002.png"
import img0003 from "./../assets/images/0003.png"
import img0004 from "./../assets/images/0004.png"

export default function Galleries(): string {
  return `
    <section id="galleries" class="flow">
        <h2 class="text-2xl font-serif font-semibold">Galleries</h2>

        <nav aria-label="Galleries Menu">
            <menu class="list-disc list-inside">
                <li><a href="#public-galleries"
                class="underline hover:opacity-70">Public Galleries</a></li>
                <li><a href="#published-galleries" class="underline hover:opacity-70">Published (Private) Galleries</a></li>
                <li><a href="#slideshow-galleries" class="underline hover:opacity-70">Slideshow Galleries</a></li>
            </menu>
        </nav>

        
        <h3 id="public-galleries" class="text-xl font-serif font-semibold">Public Galleries</h3>
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

        <hr>

        <h3 id="published-galleries" class="text-xl font-serif font-semibold">Published (Private) Galleries</h3>
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

        <hr>

        <h3 id="slideshow-galleries" class="text-xl font-serif font-semibold">Slideshow Galleries</h3>
        <p>Slideshow galleries automatically transition between photos at a set interval.</p>

        <p><strong>Prerequisites:</strong></p>
        <ul class="list-disc list-inside">
            <li>Gallery link</li>
        </ul>

        <p><strong>Steps:</strong></p>
        <p>Open the slideshow gallery link.</p>
        <p>The slideshow will begin playing automatically.</p>
        <p>You can select “Hide/Show Info” to toggle the gallery’s metadata.</p>
        <img src="${img0004}" alt="Screenshot 0004" class="rounded-sm shadow-md">

        <p class="text-center text-sm">
            <em>&ndash; End of Section &ndash;</em>
        </p>
    </section>

    `
}
