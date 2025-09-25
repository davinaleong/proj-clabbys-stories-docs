import SectionGalleries from "./Sections/Galleries"
import SectionEditor from "./Sections/Editor"
import DividerDocument from "./Dividers/Document"

export default function Main(): string {
  return `
    <main>
        <div class="wrapper bg-white py-4 mx-auto |  flow">
            ${SectionGalleries()}
            ${SectionEditor()}]
            ${DividerDocument()}
        </div>
    </main>
    `
}
