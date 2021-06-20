(function () {
  let element = document.querySelector('.editor');
  let options = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['image', 'blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['formula'],
        ['clean'],
      ],
    },
    placeholder: 'Write your text here',
    theme: 'snow',
  };
  if (element) {
    let editor = new Quill(element, options);
  }
})();
