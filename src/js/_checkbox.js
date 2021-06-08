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
      checker.addEventListener('change', function (e) {
        if (!checker.checked) {
          checkAll.checked = false;
        }
      });
    }
  });
}
