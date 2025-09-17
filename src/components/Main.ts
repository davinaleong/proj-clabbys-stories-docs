import Galleries from "./Galleries"
import Editor from "./Editor"

export default function Main(): string {
  return `
    <main class="py-4">
        <div class="wrapper mx-auto |  flow">
            ${Galleries()}
            <hr>
            ${Editor()}
        </div>
    </main>
    `
}
