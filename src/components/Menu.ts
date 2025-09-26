export default function Menu(liList: string, ariaLabel: string = ""): string {
  return `
        <nav aria-label="${ariaLabel}" class="print:hidden text-white bg-carbon-blue-500 p-2 rounded-sm shadow-md">
            <menu class="flex flex-wrap gap-4 list-none">
                ${liList}
            </menu>
        </nav>
    `
}
