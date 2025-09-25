export default function Menu(liList: string, ariaLabel: string = ""): string {
  return `
        <nav aria-label="${ariaLabel}" class="bg-neutral-200 p-2 rounded-sm">
            <menu class="flex flex-wrap gap-4 list-none">
                ${liList}
            </menu>
        </nav>
    `
}
