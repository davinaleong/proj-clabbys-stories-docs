import Galleries from "./Galleries"
import Editor from "./Editor"

export default function Main(): string {
  return `
    <main>
        <div class="wrapper bg-white py-4 mx-auto |  flow">
            ${Galleries()}
            <hr>
            ${Editor()}
        </div>
    </main>
    `
}
