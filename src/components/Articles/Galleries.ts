import img0006 from "./../../assets/images/0006.png"
import img0007 from "./../../assets/images/0007.png"
import img0008 from "./../../assets/images/0008.png"
import img0009 from "./../../assets/images/0009.png"
import img0010 from "./../../assets/images/0010.png"
import img0011 from "./../../assets/images/0011.png"
import img0012 from "./../../assets/images/0012.png"
import img0013 from "./../../assets/images/0013.png"
import Menu from "./../Menu"
import DividerArticle from "../Dividers/Article"

const ariaLabel: string = "Editor - Galleries Submenu"
const liList: string = `
    <li><a href="#galleries-create" class="underline hover:opacity-70">Create a Gallery</a></li>
    <li><a href="#galleries-edit" class="underline hover:opacity-70">Edit a Gallery</a></li>
    <li><a href="#galleries-add-photos" class="underline hover:opacity-70">Add Photos to an Existing Gallery</a></li>
    <li><a href="#galleries-passphrase" class="underline hover:opacity-70">Setting a Passphrase</a></li>
    <li><a href="#galleries-archive" class="underline hover:opacity-70">Archiving a Gallery</a></li>
    <li><a href="#galleries-save" class="underline hover:opacity-70">Saving a Gallery</a></li>
    <li><a href="#galleries-update" class="underline hover:opacity-70">Updating a Photo's Metadata</a></li>
    <li><a href="#galleries-move" class="underline hover:opacity-70">Moving a Photo</a></li>
    <li><a href="#galleries-remove-photo" class="underline hover:opacity-70">Removing a Photo</a></li>
`
const navMenu: string = Menu(liList, ariaLabel)

export default function ArticleGalleries(): string {
  return `
    <article id="editor-galleries" class="flow">
        <h3 class="text-xl font-serif font-semibold">Galleries</h3>

        ${navMenu}

        <hr>

        <h4 id="editor-galleries-create" class="font-serif font-semibold">Create a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Select <strong>Create</strong>.</li>
            <li>A skeleton Gallery will be generated.</li>
            <li>Make the changes to the available fields.</li>
            <li>Select <strong>Save</strong>.</li>
            <li>You should be redirected to Edit Gallery page.</li>
        </ol>

        <p><strong>Fields:</strong></p>
        <ul class="list-disc list-inside">
            <li><strong>Title</strong>: The title of the gallery.</li>
            <li><strong>URL</strong>: The URL slug for the gallery. Select it to copy and share it!</li>
            <li><strong>Spotify Playlist</strong>: The sharable Spotify playlist URL.</li>
            <li><strong>Date</strong>: Triggers a date picker that allows you to pick a date.</li>
        </ul>

        <img src="${img0007}" alt="Screenshot 0007" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-edit" class="font-serif font-semibold">Edit a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Make the changes to the available fields.</li>
            <li>Select <strong>Save</strong>.</li>
        </ol>
        
        <img src="${img0006}" alt="Screenshot 0006" class="rounded-sm shadow-md">

        <p><strong>Fields:</strong></p>
        <ul class="list-disc list-inside">
            <li><strong>Title</strong>: The title of the gallery.</li>
            <li><strong>URL</strong>: The URL slug for the gallery. Select it to copy and share it!</li>
            <li><strong>Spotify Playlist</strong>: The sharable Spotify playlist URL.</li>
            <li><strong>Date</strong>: Triggers a date picker that allows you to pick a date.</li>
            <li><strong>Status</strong>: Allows you to set the state to Draft, Published and Public.</li>
            <li><strong>Lightbox</strong>: Allows you to set the lightbox mode to Black, Blurred or Slideshow.</li>
        </ul>

        <p><strong>Buttons:</strong></p>
        <ul class="list-disc list-inside">
            <li><strong>Photos</strong>: Add photos to the gallery.</li>
            <li><strong>Set Passphrase</strong>: Set a passphrase for a Published gallery.</li>
            <li><strong>Archive</strong>: Archives the current gallery.</li>
            <li><strong>Save</strong>: Saves any changes to the gallery.</li>
        </ul>
        <img src="${img0008}" alt="Screenshot 0008" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-add-photos" class="font-serif font-semibold">Add Photos to an Existing Gallery</h4>

        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Photos</strong>.</li>
            <li>Drag and drop photos onto the dashed area or select <strong>Browse</strong> to open a file dialog.</li>
            <li>Wait for the upload to complete.</li>
            <li>Make the necessary changes to the photos.</li>
            <li>Select <strong>Add</strong>.</li>
        </ol>

        <div class="grid grid-cols-2 gap-2">
          <img src="${img0009}" alt="Screenshot 0009" class="rounded-sm shadow-md">
          <img src="${img0010}" alt="Screenshot 0010" class="rounded-sm shadow-md">
        </div>

        <h4 id="editor-galleries-passphrase" class="font-serif font-semibold">Setting a Passphrase</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Set Passphrase</strong>.</li>
            <li>Generate or enter a passphrase and select <strong>Save</strong>.</li>
        </ol>

        <p><strong>Buttons:</strong></p>
        <ul class="list-decimal list-inside">
            <li><strong>Generate</strong>: Generates a passphrase.</li>
            <li><strong>Cancel</strong>: Closes the dialog.</li>
            <li><strong>Save</strong>: Saves the current passphrase to the gallery.</li>
        </ul>

        <img src="${img0013}" alt="Screenshot 0013" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-archive" class="font-serif font-semibold">Archiving a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Archive</strong>.</li>
            <li>Wait till the you are redirected to the <strong>main Galleries page</strong>.</li>
        </ol>

        <h4 id="editor-galleries-save" class="font-serif font-semibold">Saving a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Make the changes to the available fields.</li>
            <li>Select <strong>Save</strong>.</li>
            <li>Wait till the a toast appears before closing the page.</li>
        </ol>

        <h4 id="editor-galleries-update" class="font-serif font-semibold">Updating a Photo's Metadata</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Right-click on a <strong>laptop/desktop</strong> or long-tap on a <strong>phone/tablet</strong> to toggle the context menu.</li>
            <li>Select <strong>Edit Metadata</strong>.</li>
            <li>Make the changes to the available fields.</li>
            <li>Select <strong>Save</strong>.</li>
        </ol>

        <div class="grid grid-cols-2 gap-2">
          <img src="${img0011}" alt="Screenshot 0011" class="rounded-sm shadow-md">
          <img src="${img0012}" alt="Screenshot 0012" class="rounded-sm shadow-md">
        </div>

        <h4 id="editor-galleries-move" class="font-serif font-semibold">Moving a Photo</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Right-click on a <strong>laptop/desktop</strong> or long-tap on a <strong>phone/tablet</strong> to toggle the context menu.</li>
            <li>Select <strong>any of the galleries</strong> under <strong>Move to...</strong>.</li>
            <li>The photo will be moved to the <strong>selected Gallery</strong>.</li>
        </ol>

        <img src="${img0011}" alt="Screenshot 0011" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-remove-photo" class="font-serif font-semibold">Removing a Photo</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Right-click on a <strong>laptop/desktop</strong> or long-tap on a <strong>phone/tablet</strong> to toggle the context menu.</li>
            <li>Select <strong>Remove</strong>.</li>
            <li>The photo will be <strong>removed</strong> from the <strong>current Gallery</strong>.</li>
        </ol>

        <img src="${img0011}" alt="Screenshot 0011" class="rounded-sm shadow-md">

        ${DividerArticle()}

        <hr>
    </article>
    `
}
