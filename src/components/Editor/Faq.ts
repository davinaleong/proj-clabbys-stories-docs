import img0017 from "./../../assets/images/0017.png"
import SectionDivider from "../SectionDivider"

export default function EditorFaq(): string {
  return `
    <section id="editor-faq" class="flow">
        <h3 id="faq" class="text-xl font-serif font-semibold">FAQ</h3>
        
        <p>The FAQ page provides a quick reference on how to use the Editor.</p>

        <img src="${img0017}" alt="Screenshot 0017" class="rounded-sm shadow-md">

        ${SectionDivider()}

        <hr>
    </section>
    `
}
