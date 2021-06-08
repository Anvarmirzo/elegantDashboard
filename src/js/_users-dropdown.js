(function () {
  const userDdBtnList = document.querySelectorAll('.dropdown-btn');
  const userDdList = document.querySelectorAll('.users-item-dropdown');
  const layer = document.querySelector('.layer');

  if (userDdList && userDdBtnList) {
    for (const userDdBtn of userDdBtnList) {
      userDdBtn.addEventListener('click', function (e) {
        layer.classList.add('active');
        for (const userDd of userDdList) {
          if (e.currentTarget.nextElementSibling == userDd) {
            if (userDd.classList.contains('active')) {
              userDd.classList.remove('active');
            } else {
              userDd.classList.add('active');
            }
          } else {
            userDd.classList.remove('active');
          }
        }
      });
    }
  }

  if (layer) {
    layer.addEventListener('click', function (e) {
      for (const userDd of userDdList) {
        if (userDd.classList.contains('active')) {
          userDd.classList.remove('active');
          layer.classList.remove('active');
        }
      }
    });
  }
})();
