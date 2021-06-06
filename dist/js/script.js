"use strict";

/* function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});*/
feather.replace();

(function () {
  var sidebar = document.querySelector('.sidebar');
  var catSubMenu = document.querySelector('.cat-sub-menu');
  var sidebarBtn = document.querySelector('.sidebar-toggle');

  if (sidebarBtn) {
    sidebarBtn.addEventListener('click', function () {
      sidebar.classList.toggle('hidden');
      catSubMenu.classList.remove('visible');
    });
  }
})();

(function () {
  var showCatBtn = document.querySelector('.category__btn');
  var catSubMenu = document.querySelector('.cat-sub-menu');

  if (showCatBtn) {
    showCatBtn.addEventListener('click', function (e) {
      catSubMenu.classList.toggle('visible');
      console.log(showCatBtn.style.transform);
      showCatBtn.classList.toggle('rotated');
    });
  }
})();

(function () {
  var showMenu = document.querySelector('.lang-switcher');
  var langMenu = document.querySelector('.lang-menu');

  if (showMenu) {
    showMenu.addEventListener('click', function () {
      langMenu.classList.toggle('active');
    });
  }
})();