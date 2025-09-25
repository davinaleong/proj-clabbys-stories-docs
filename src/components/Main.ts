import Galleries from "./Galleries"
import Editor from "./Editor"
import DocumentDivider from "./DocumentDivider"

export default function Main(): string {
  return `
    <main>
        <div class="wrapper bg-white py-4 mx-auto |  flow">
            ${Galleries()}
            ${Editor()}
            ${DocumentDivider()}
        </div>
    </main>
    `
}
