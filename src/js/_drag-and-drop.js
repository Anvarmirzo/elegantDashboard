(function () {
  const dragItems = document.querySelectorAll('.draggable');
  const dropZones = document.querySelectorAll('.drag-zone');
  let draggedItem = null;
  let droppedItem = null;

  dragItems.forEach((dragItem) => {
    dragItem.addEventListener('dragstart', handleDragStart);
    dragItem.addEventListener('dragend', handleDragEnd);
    dragItem.addEventListener('drag', handleDrag);

    dragItem.addEventListener('dragenter', () => {
      if (draggedItem !== droppedItem) {
        droppedItem = dragItem;
      }
    });
    dragItem.addEventListener('dragleave', () => {
      droppedItem = null;
    });
  });

  dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
  });

  function handleDragStart(e) {
    // e.dataTransfer.setData('dragItem', this.dataset.item);
    draggedItem = this;
    this.classList.add('draggable--active');
  }

  function handleDragEnd() {
    this.classList.remove('draggable--active');
    if (this.parentElement.classList.contains('appearance-sidebar')) {
      this.querySelector('.icon').classList = 'icon settings-line';
    } else {
      if (this.querySelector('.icon').classList.contains('settings-line')) {
        this.querySelector('.icon').classList = 'icon move';
      }
    }
    if (this.parentElement.classList.contains('drag-top-navbar')) {
      this.classList.add('clipped');
    } else {
      if (this.classList.contains('clipped')) {
        this.classList.remove('clipped');
      }
    }
    draggedItem = null;
  }

  function handleDrag() {}

  function handleDragEnter(e) {
    e.preventDefault();
  }

  function handleDragLeave() {}
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    // const dragFlag = e.dataTransfer.getData('dragItem');
    // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
    // this.append(dragItem);
    this.querySelector('.appearance-sidebar-title')?.classList.add('active');
    if (droppedItem) {
      if (droppedItem.parentElement === draggedItem.parentElement) {
        const children = Array.from(droppedItem.parentElement.children);
        const draggedIndex = children.indexOf(draggedItem);
        const droppedIndex = children.indexOf(droppedItem);
        if (draggedIndex > droppedIndex) {
          draggedItem.parentElement.insertBefore(draggedItem, droppedItem);
        } else {
          draggedItem.parentElement.insertBefore(
            draggedItem,
            droppedItem.nextElementSibling
          );
        }
      } else {
        this.insertBefore(draggedItem, droppedItem);
      }
    } else {
      this.append(draggedItem);
    }
  }
})();
