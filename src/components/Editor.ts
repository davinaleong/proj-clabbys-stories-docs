import img0005 from "./../assets/images/0005.png"
import img0006 from "./../assets/images/0006.png"
import img0007 from "./../assets/images/0007.png"
import img0008 from "./../assets/images/0008.png"
import img0009 from "./../assets/images/0009.png"
import img0010 from "./../assets/images/0010.png"
import img0011 from "./../assets/images/0011.png"
import img0013 from "./../assets/images/0013.png"
import img0017 from "./../assets/images/0017.png"

export default function Editor(): string {
  return `
    <section id="editor" class="flow"></section>
        <h2 class="text-2xl font-serif font-semibold">Editor</h2>
        
        <nav aria-label="Galleries Menu">
            <menu class="list-disc list-inside">
                <li><a href="#login" class="underline hover:opacity-70">Login</a></li>
                <li><a href="#galleries" class="underline hover:opacity-70">Galleries</a></li>
                <li><a href="#archives" class="underline hover:opacity-70">Archives</a></li>
                <li><a href="#settings" class="underline hover:opacity-70">Settings</a></li>
                <li><a href="#faq" class="underline hover:opacity-70">FAQ</a></li>
            </menu>
        </nav>

        <hr>

        <h3 id="login" class="text-xl font-serif font-semibold">Login</h3>
        <p><strong>Prerequisites:</strong></p>
        <ul class="list-disc list-inside">
            <li>Link to the Editor</li>
            <li>Login information</li>
        </ul>

        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Enter the login information and select <strong>Log In</strong>.</li>
        </ol>

        <img src="${img0005}" alt="Screenshot 0005" class="rounded-sm shadow-md">

        <hr>

        <h3 id="galleries" class="text-xl font-serif font-semibold">Galleries</h3>

        <h4 class="font-serif font-semibold">Create a Gallery</h4>
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

        <h4 class="font-serif font-semibold">Edit a Gallery</h4>
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

        <h4 class="font-serif font-semibold">Add Photos to an Existing Gallery</h4>

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

        <h4 class="font-serif font-semibold">Setting a Passphrase</h4>
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

        <h4 class="font-serif font-semibold">Archiving a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Select <strong>Archive</strong>.</li>
            <li>Wait till the you are redirected to the <strong>main Galleries page</strong>.</li>
        </ol>

        <h4 class="font-serif font-semibold">Saving a Gallery</h4>
        <p><strong>Steps:</strong></p>
        <ol class="list-decimal list-inside">
            <li>Go to the main <strong>Galleries</strong> page.</li>
            <li>Select an <strong>existing gallery</strong>.</li>
            <li>Make the changes to the available fields.</li>
            <li>Select <strong>Save</strong>.</li>
            <li>Wait till the a toast appears before closing the page.</li>
        </ol>

        <hr>

        <h3 id="archives" class="text-xl font-serif font-semibold">Archives</h3>

        <hr>

        <h3 id="settings" class="text-xl font-serif font-semibold">Settings</h3>

        <hr>

        <h3 id="faq" class="text-xl font-serif font-semibold">FAQ</h3>
        <p>The FAQ page provides a quick reference on how to use the Editor.</p>

        <img src="${img0017}" alt="Screenshot 0017" class="rounded-sm shadow-md">

        <p class="text-center text-sm">
            <em>&ndash; End of Section &ndash;</em>
        </p>
    </section>
    `
}
