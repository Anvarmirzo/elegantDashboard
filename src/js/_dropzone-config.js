(function () {
  Dropzone.autoDiscover = false;
  const dropzoneID = document.getElementById('dropzone');
  if (dropzoneID) {
    var myDropzone = new Dropzone(dropzoneID, { url: '/file/post' });
  }
})();
