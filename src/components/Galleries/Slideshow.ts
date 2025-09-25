import img0004 from "./../../assets/images/0004.png"
import SectionDivider from "../SectionDivider"

export default function SlideshowGalleries(): string {
  return `
        <section id="slideshow-galleries" class="flow">
            <h3 class="text-xl font-serif font-semibold">Slideshow Galleries</h3>
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

            ${SectionDivider()}
            
            <hr>
        </section>
    `
}
