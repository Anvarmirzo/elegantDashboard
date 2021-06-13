(function () {
  const tabs = document.querySelectorAll('.tab-menu a');
  if (tabs) {
    for (const tab of tabs) {
      tab.addEventListener('click', function (e) {
        for (const tab of tabs) {
          tab.classList.remove('active');
        }
        e.currentTarget.classList.add('active');
      });
    }
  }
})();
