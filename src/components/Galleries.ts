import PublicGalleries from "./Galleries/Public"
import PublishedGalleries from "./Galleries/Published"
import SlideshowGalleries from "./Galleries/Slideshow"
import SectionDivider from "./SectionDivider"

export default function Galleries(): string {
  return `
    <section id="galleries" class="flow">
        <h2 class="text-2xl font-serif font-semibold">Galleries</h2>

        <nav aria-label="Galleries Menu" class="bg-neutral-200 p-2 rounded-sm">
            <menu class="flex flex-wrap gap-4 list-none">
                <li><a href="#public-galleries"
                class="underline hover:opacity-70">Public Galleries</a></li>
                <li><a href="#published-galleries" class="underline hover:opacity-70">Published (Private) Galleries</a></li>
                <li><a href="#slideshow-galleries" class="underline hover:opacity-70">Slideshow Galleries</a></li>
            </menu>
        </nav>

        <hr>
        
        ${PublicGalleries()}
        ${PublishedGalleries()}
        ${SlideshowGalleries()}

        ${SectionDivider()}
    </section>

    `
}
