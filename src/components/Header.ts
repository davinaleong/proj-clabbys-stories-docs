import getOS from "../lib/getOS"
import iconPrinter from "./../assets/icons/printer-w.svg"
import logoWhite from "./../assets/logos/logo-white.png"

export default function Header(): string {
  console.log("User OS:", getOS())

  const keyName = getOS() === "macOS" ? "Cmd" : "Cntrl"

  return `
    <header class="sticky top-0 z-10">
      <section class="text-white bg-gray-500">
        <div class="wrapper mx-auto">
          <p class="flex gap-2 items-center justify-center">
            Press <code>${keyName}</code> + <code>P</code> to print <img src="${iconPrinter}" alt="Printer Icon" width="16px" height="16px" /> this document.
          </p>
        </div>
      </section>
      <section class="text-white bg-carbon-blue-500">
        <div class="wrapper mx-auto">
          <nav class="flex items-center justify-between gap-4">
            <a href="#top" class="flex items-center gap-3 underline hover:opacity-70">
              <img src="${logoWhite}" alt="C&G's Stories Logo" width="40px" height="40px" />
              <span class="font-serif font-semibold text-lg">
                C&amp;G's Stories Documentation
              </span>
            </a>

            <div class="flex items-center gap-2">
              <a class="underline hover:opacity-70" href="#galleries">Galleries</a>
              <span>|</span>
              <a class="underline hover:opacity-70" href="#editor">Editor</a>
            </div>
          </nav>
        </div>      
      </section>
    </header>
  `
}
