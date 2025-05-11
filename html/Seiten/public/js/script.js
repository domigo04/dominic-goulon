// script.js
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');

dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  const files = e.dataTransfer.files;
  showFiles(files);
});

fileInput.addEventListener('change', () => {
  showFiles(fileInput.files);
});

function showFiles(files) {
  const fileList = Array.from(files).map(file => file.name).join(', ');
  dropzone.innerText = "Hochgeladen: " + fileList;
}

function handleSubmit() {
  const selected = Array.from(document.querySelectorAll('input[name="nachweis"]:checked')).map(cb => cb.value);
  alert("Offertenanfrage für: " + selected.join(', '));
}
