/*const dropArea = document.querySelector('dropArea');
const dragText = document.querySelector('h2');
const uploadButton = dropArea.querySelector('uploadButton');
const input = dropArea.querySelector('#input-file');
let files;

button.addEventListener("click", (e)=> {
    input.click();
});

input.addEventListener("change", (e)=> {

    files=this.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
});
*/
document.querySelectorAll(".dropInput").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".dropArea");

    dropZoneElement.addEventListener("click", e => {
        inputElement.click();
    });

    inputElement.addEventListener("change", e => {
        if(inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0])
        }
    });

    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("dropOver")
    });

    ["dragleave", "dragend"].forEach(type=> {
        dropZoneElement.addEventListener(type, e=> {
            dropZoneElement.classList.remove("dropOver")
        });
    });

    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("dropOver");

    });
});


