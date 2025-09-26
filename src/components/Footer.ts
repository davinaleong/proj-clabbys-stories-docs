export default function Footer(): string {
  return `
    <footer class="print:hidden text-gray-900 bg-pastel-pink-500">
      <div class="wrapper bg-white py-4 mx-auto">
        <nav class="flex gap-2 items-center text-sm justify-center">
          <a class="underline hover:opacity-70" href="#galleries">Galleries</a>
          <span>|</span>
          <a class="underline hover:opacity-70" href="#editor">Editor</a>
          <span>|</span>
          <a class="underline hover:opacity-70" href="#top">Back to Top</a>
        </nav>
      </div>
    </footer>
  `
}
