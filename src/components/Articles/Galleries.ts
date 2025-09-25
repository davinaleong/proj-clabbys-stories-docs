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
    <li><a href="#galleries-add-photos" class="underline hover:opacity-70">Add Photos to a Gallery</a></li>
    <li><a href="#galleries-passphrase" class="underline hover:opacity-70">Set a Passphrase</a></li>
    <li><a href="#galleries-archive" class="underline hover:opacity-70">Archive a Gallery</a></li>
    <li><a href="#galleries-save" class="underline hover:opacity-70">Save a Gallery</a></li>
    <li><a href="#galleries-update" class="underline hover:opacity-70">Update Photo Metadata</a></li>
    <li><a href="#galleries-move" class="underline hover:opacity-70">Move a Photo</a></li>
    <li><a href="#galleries-remove-photo" class="underline hover:opacity-70">Remove a Photo</a></li>
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
        <ol class="list-decimal pl-5">
            <li>Select <strong>Create</strong>.</li>
            <li>A new skeleton Gallery will be generated.</li>
            <li>Fill in the available fields as required.</li>
            <li>Select <strong>Save</strong>.</li>
            <li>You will be redirected to the Edit Gallery page.</li>
        </ol>

        <p><strong>Fields:</strong></p>
        <ul class="list-disc pl-5">
            <li><strong>Title</strong>: The name of the gallery.</li>
            <li><strong>URL</strong>: The gallery’s URL slug. Select it to copy and share.</li>
            <li><strong>Spotify Playlist</strong>: A sharable Spotify playlist link.</li>
            <li><strong>Date</strong>: Opens a date picker to select a date.</li>
        </ul>

        <img src="${img0007}" alt="Screenshot 0007" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-edit" class="font-serif font-semibold">Edit a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Edit the required fields.</li>
            <li>Select <strong>Save</strong>.</li>
        </ol>
        
        <img src="${img0006}" alt="Screenshot 0006" class="rounded-sm shadow-md">

        <p><strong>Fields:</strong></p>
        <ul class="list-disc pl-5">
            <li><strong>Title</strong>: The name of the gallery.</li>
            <li><strong>URL</strong>: The gallery’s URL slug. Select it to copy and share.</li>
            <li><strong>Spotify Playlist</strong>: A sharable Spotify playlist link.</li>
            <li><strong>Date</strong>: Opens a date picker to select a date.</li>
            <li>
                <strong>Status</strong>: Set the state to Draft, Published, or Public.
                <ul class="list-disc pl-5">
                    <li>
                        <b>Draft:</b> Only visible to you in the Editor. Not shared or
                        accessible to anyone else.
                    </li>
                    <li>
                        <b>Published:</b> Accessible only via a secret passphrase. Use this
                        when you want to share with selected people.
                    </li>
                    <li>
                        <b>Public:</b> Viewable by anyone with the gallery link. No
                        passphrase required.
                    </li>
                </ul>
            </li>
            <li>
                <strong>Lightbox</strong>: Choose a lightbox style (Black, Blurred, or Slideshow).
                <ul class="list-disc pl-5">
                    <li>
                        <b>Black:</b> Displays photos in a black background lightbox.
                    </li>
                    <li>
                        <b>Blurred:</b> Uses a blurred version of the image as background.
                    </li>
                    <li>
                        <b>Slideshow:</b> Displays photos one after another in sequence,
                        using a blurred version of the current image as the background while
                        transitioning smoothly to the next.
                    </li>
                </ul>
            </li>
        </ul>

        <p><strong>Buttons:</strong></p>
        <ul class="list-disc pl-5">
            <li><strong>Photos</strong>: Add photos to the gallery.</li>
            <li><strong>Set Passphrase</strong>: Define a passphrase for a Published gallery.</li>
            <li><strong>Archive</strong>: Archive the current gallery.</li>
            <li><strong>Save</strong>: Save any changes.</li>
        </ul>
        <img src="${img0008}" alt="Screenshot 0008" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-add-photos" class="font-serif font-semibold">Add Photos to a Gallery</h4>

        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Photos</strong>.</li>
            <li>Drag and drop photos into the dashed area or select <strong>Browse</strong> to upload files.</li>
            <li>Wait for the upload to finish.</li>
            <li>Make adjustments to the photos if needed.</li>
            <li>Select <strong>Add</strong>.</li>
        </ol>

        <div class="grid grid-cols-2 gap-2">
          <img src="${img0009}" alt="Screenshot 0009" class="rounded-sm shadow-md">
          <img src="${img0010}" alt="Screenshot 0010" class="rounded-sm shadow-md">
        </div>

        <h4 id="editor-galleries-passphrase" class="font-serif font-semibold">Set a Passphrase</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Set Passphrase</strong>.</li>
            <li>Generate or enter a passphrase, then select <strong>Save</strong>.</li>
        </ol>

        <p><strong>Buttons:</strong></p>
        <ul class="list-decimal pl-5">
            <li><strong>Generate</strong>: Creates a random passphrase.</li>
            <li><strong>Cancel</strong>: Closes the dialog.</li>
            <li><strong>Save</strong>: Saves the passphrase for the gallery.</li>
        </ul>

        <img src="${img0013}" alt="Screenshot 0013" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-archive" class="font-serif font-semibold">Archive a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Archive</strong>.</li>
            <li>Wait until you are redirected back to the <strong>Galleries</strong> page.</li>
        </ol>

        <h4 id="editor-galleries-save" class="font-serif font-semibold">Save a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Edit the required fields.</li>
            <li>Select <strong>Save</strong>.</li>
            <li>Wait for a confirmation toast before closing the page.</li>
        </ol>

        <h4 id="editor-galleries-update" class="font-serif font-semibold">Update Photo Metadata</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Right-click on <strong>desktop/laptop</strong> or long-tap on <strong>mobile/tablet</strong> to open the context menu.</li>
            <li>Select <strong>Edit Metadata</strong>.</li>
            <li>Edit the available fields.</li>
            <li>Select <strong>Save</strong>.</li>
        </ol>

        <div class="grid grid-cols-2 gap-2">
          <img src="${img0011}" alt="Screenshot 0011" class="rounded-sm shadow-md">
          <img src="${img0012}" alt="Screenshot 0012" class="rounded-sm shadow-md">
        </div>

        <h4 id="editor-galleries-move" class="font-serif font-semibold">Move a Photo</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Right-click on <strong>desktop/laptop</strong> or long-tap on <strong>mobile/tablet</strong> to open the context menu.</li>
            <li>Select the target gallery from <strong>Move to...</strong>.</li>
            <li>The photo will be transferred to the selected gallery.</li>
        </ol>

        <img src="${img0011}" alt="Screenshot 0011" class="rounded-sm shadow-md">

        <h4 id="editor-galleries-remove-photo" class="font-serif font-semibold">Remove a Photo</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal pl-5">
            <li>Navigate to the <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Right-click on <strong>desktop/laptop</strong> or long-tap on <strong>mobile/tablet</strong> to open the context menu.</li>
            <li>Select <strong>Remove</strong>.</li>
            <li>The photo will be deleted from the selected gallery.</li>
        </ol>

        <img src="${img0011}" alt="Screenshot 0011" class="rounded-sm shadow-md">

        ${DividerArticle()}

        <hr>
    </article>
    `
}
