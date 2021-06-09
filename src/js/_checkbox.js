(function () {
  const checkAll = document.querySelector('.check-all');
  const checkers = document.querySelectorAll('.check');
  if (checkAll && checkers) {
    checkAll.addEventListener('change', function (e) {
      for (const checker of checkers) {
        if (checkAll.checked) {
          checker.checked = true;
        } else {
          checker.checked = false;
        }
      }
    });
  }
  for (const checker of checkers) {
    checker.addEventListener('change', function (e) {
      if (!checker.checked) {
        checkAll.checked = false;
      }
      let totalCheckbox = document.querySelectorAll('.users-table .check');
      let totalChecked = document.querySelectorAll(
        '.users-table .check:checked'
      );
      if (totalCheckbox && totalChecked) {
        if (totalCheckbox.length == totalChecked.length) {
          checkAll.checked = true;
        } else {
          checkAll.checked = false;
        }
      }
    });
  }
})();
