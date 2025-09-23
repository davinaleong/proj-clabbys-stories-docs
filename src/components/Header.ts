import getOS from "../lib/getOS"
import iconPrinter from "./../assets/icons/printer-w.svg"
import logoWhite from "./../assets/logos/logo-white.png"

export default function Header(): string {
  const keyName = getOS() === "macOS" ? "Cmd" : "Ctrl"

  return `
    <header class="sticky top-0 z-10">
      <section class="bg-gray-500 text-white">
        <div class="wrapper mx-auto">
          <p class="flex items-center justify-center gap-2">
            Press <code>${keyName}</code> + <code>P</code> to print this document 
            <img src="${iconPrinter}" alt="Printer Icon" width="16" height="16" />.
          </p>
        </div>
      </section>

      <section class="bg-carbon-blue-500 text-white">
        <div class="wrapper mx-auto">
          <nav class="flex items-center justify-between gap-4">
            <a href="#top" class="flex items-center gap-3 underline hover:opacity-70">
              <img src="${logoWhite}" alt="C&G's Stories Logo" width="40" height="40" />
              <span class="font-serif font-semibold text-lg">
                C&amp;G's Stories: Documentation
              </span>
            </a>

            <menu class="flex items-center gap-2">
              <a href="#galleries" class="underline hover:opacity-70">Galleries</a>
              <span>|</span>
              <a href="#editor" class="underline hover:opacity-70">Editor</a>
              <span>|</span>
              <a href="#top" class="underline hover:opacity-70">Back to Top</a>
            </menu>
          </nav>
        </div>      
      </section>
    </header>
  `
}
