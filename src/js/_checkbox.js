(function () {
  const checkAll = document.querySelector('.check-all');
  const checkers = document.querySelectorAll('.check');
  if (checkAll && checkers) {
    checkAll.addEventListener('change', function (e) {
      for (const checker of checkers) {
        if (checkAll.checked) {
          checker.checked = true;
          checker.parentElement.parentElement.parentElement.classList.add(
            'active'
          );
        } else {
          checker.checked = false;
          checker.parentElement.parentElement.parentElement.classList.remove(
            'active'
          );
        }
      }
    });
    for (const checker of checkers) {
      checker.addEventListener('change', function (e) {
        checker.parentElement.parentElement.parentElement.classList.toggle(
          'active'
        );
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
  }
})();
(function () {
  const checkAll = document.querySelector('.check-all');
  const checkers = document.querySelectorAll('.check');
  const checkedSum = document.querySelector('.checked-sum');
  if (checkedSum && checkAll && checkers) {
    checkAll.addEventListener('change', function (e) {
      let totalChecked = document.querySelectorAll(
        '.users-table .check:checked'
      );
      checkedSum.textContent = totalChecked.length;
    });
    for (const checker of checkers) {
      checker.addEventListener('change', function (e) {
        let totalChecked = document.querySelectorAll(
          '.users-table .check:checked'
        );
        checkedSum.textContent = totalChecked.length;
      });
    }
  }
})();
