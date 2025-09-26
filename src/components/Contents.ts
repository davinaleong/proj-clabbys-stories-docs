export default function Contents(
  liList: string,
  ariaLabel: string = ""
): string {
  return `
        <nav aria-label="${ariaLabel}" class="hidden print:block flow">
            <p>In this part:</p>
            <menu class="flex flex-wrap gap-4 list-none">
                ${liList}
            </menu>
        </nav>
    `
}
