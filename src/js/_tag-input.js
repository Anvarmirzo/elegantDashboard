(function () {
  const tagContainer = document.querySelector('.tag-container');
  if (tagContainer) {
    const input = document.querySelector('.tag-container input');
    let tags = [];

    function createTag(label) {
      const div = document.createElement('div');
      div.setAttribute('class', 'tag');
      const span = document.createElement('span');
      span.setAttribute('class', 'tag__title');
      span.innerHTML = label;
      const closeBtn = document.createElement('i');
      closeBtn.setAttribute('class', 'icon');
      closeBtn.setAttribute('data-item', label);
      closeBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      div.appendChild(span);
      div.appendChild(closeBtn);
      return div;
    }

    function reset() {
      document.querySelectorAll('.tag').forEach((tag) => {
        tag.parentElement.removeChild(tag);
      });
    }

    function addTags() {
      reset();
      tags
        .slice()
        .reverse()
        .forEach((tag) => {
          const input = createTag(tag);
          tagContainer.prepend(input);
        });
    }

    input.addEventListener('keyup', function (e) {
      const trimmed = input.value.replace(/\s+/g, ' ').trim();
      if (e.keyCode === 32 && trimmed.length >= 2) {
        tags.push(input.value);
        addTags();
        const tagCloseBtns = document.querySelectorAll('.tag .icon');
        if (tagCloseBtns) {
          for (const tagCloseBtn of tagCloseBtns) {
            tagCloseBtn.addEventListener('click', function (e) {
              let btnAttr = tagCloseBtn.getAttribute('data-item');
              for (const tagsItem of tags) {
                if (btnAttr === tagsItem) {
                  tagCloseBtn.parentElement.remove();
                  tags = tags.filter((item) => item !== btnAttr);
                }
              }
            });
          }
        }
        input.value = '';
      }
    });

    const tagBtns = document.querySelectorAll('.tag-btn');
    tagBtns.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const value = btn.textContent;
        createTag(value);
        tags.push(value);
        addTags();
        const tagCloseBtns = document.querySelectorAll('.tag .icon');
        if (tagCloseBtns) {
          for (const tagCloseBtn of tagCloseBtns) {
            tagCloseBtn.addEventListener('click', function (e) {
              let btnAttr = tagCloseBtn.getAttribute('data-item');
              for (const tagsItem of tags) {
                if (btnAttr === tagsItem) {
                  tagCloseBtn.parentElement.remove();
                  tags = tags.filter((item) => item !== btnAttr);
                }
              }
            });
          }
        }
      });
    });
  }
})();
