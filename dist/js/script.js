"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
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
        sidebarBtn.classList.toggle('rotated');
        sidebar.classList.toggle('hidden');
        catSubMenu.classList.remove('visible');
      });
    }
  })();

  (function () {
    var showCatBtn = document.querySelector('.show-cat-btn');
    var catSubMenu = document.querySelector('.cat-sub-menu');

    if (showCatBtn) {
      showCatBtn.addEventListener('click', function (e) {
        e.preventDefault();
        catSubMenu.classList.toggle('visible');
        var catBtnToRotate = document.querySelector('.category__btn');
        catBtnToRotate.classList.toggle('rotated');
      });
    }
  })();

  (function () {
    var showMenu = document.querySelector('.lang-switcher');
    var langMenu = document.querySelector('.lang-menu');
    var layer = document.querySelector('.layer');

    if (showMenu) {
      showMenu.addEventListener('click', function () {
        langMenu.classList.add('active');
        layer.classList.add('active');
      });

      if (layer) {
        layer.addEventListener('click', function (e) {
          if (langMenu.classList.contains('active')) {
            langMenu.classList.remove('active');
            layer.classList.remove('active');
          }
        });
      }
    }
  })();

  (function () {
    var userDdBtnList = document.querySelectorAll('.dropdown-btn');
    var userDdList = document.querySelectorAll('.users-item-dropdown');
    var layer = document.querySelector('.layer');

    if (userDdList && userDdBtnList) {
      var _iterator = _createForOfIteratorHelper(userDdBtnList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var userDdBtn = _step.value;
          userDdBtn.addEventListener('click', function (e) {
            layer.classList.add('active');

            var _iterator2 = _createForOfIteratorHelper(userDdList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var userDd = _step2.value;

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
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (layer) {
      layer.addEventListener('click', function (e) {
        var _iterator3 = _createForOfIteratorHelper(userDdList),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var userDd = _step3.value;

            if (userDd.classList.contains('active')) {
              userDd.classList.remove('active');
              layer.classList.remove('active');
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
    }
  })();

  (function () {
    Chart.defaults.backgroundColor = '#000';
    var darkMode = localStorage.getItem('darkMode');
    var darkModeToggle = document.querySelector('.theme-switcher');

    var enableDarkMode = function enableDarkMode() {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkMode', 'enabled');
    };

    var disableDarkMode = function disableDarkMode() {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkMode', null);
    };

    if (darkMode === 'enabled') {
      enableDarkMode();
    }

    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', function () {
        darkMode = localStorage.getItem('darkMode');

        if (darkMode !== 'enabled') {
          enableDarkMode();
        } else {
          disableDarkMode();
        }

        addData();
      });
    }
  })();

  (function () {
    var checkAll = document.querySelector('.check-all');
    var checkers = document.querySelectorAll('.check');

    if (checkAll && checkers) {
      checkAll.addEventListener('change', function (e) {
        var _iterator4 = _createForOfIteratorHelper(checkers),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var checker = _step4.value;

            if (checkAll.checked) {
              checker.checked = true;
              checker.parentElement.parentElement.parentElement.classList.add('active');
            } else {
              checker.checked = false;
              checker.parentElement.parentElement.parentElement.classList.remove('active');
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      });

      var _iterator5 = _createForOfIteratorHelper(checkers),
          _step5;

      try {
        var _loop = function _loop() {
          var checker = _step5.value;
          checker.addEventListener('change', function (e) {
            checker.parentElement.parentElement.parentElement.classList.toggle('active');

            if (!checker.checked) {
              checkAll.checked = false;
            }

            var totalCheckbox = document.querySelectorAll('.users-table .check');
            var totalChecked = document.querySelectorAll('.users-table .check:checked');

            if (totalCheckbox && totalChecked) {
              if (totalCheckbox.length == totalChecked.length) {
                checkAll.checked = true;
              } else {
                checkAll.checked = false;
              }
            }
          });
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  })();

  (function () {
    var checkAll = document.querySelector('.check-all');
    var checkers = document.querySelectorAll('.check');
    var checkedSum = document.querySelector('.checked-sum');

    if (checkedSum && checkAll && checkers) {
      checkAll.addEventListener('change', function (e) {
        var totalChecked = document.querySelectorAll('.users-table .check:checked');
        checkedSum.textContent = totalChecked.length;
      });

      var _iterator6 = _createForOfIteratorHelper(checkers),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var checker = _step6.value;
          checker.addEventListener('change', function (e) {
            var totalChecked = document.querySelectorAll('.users-table .check:checked');
            checkedSum.textContent = totalChecked.length;
          });
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  })();

  (function () {
    var tabs = document.querySelectorAll('.tab-menu a');

    if (tabs) {
      var _iterator7 = _createForOfIteratorHelper(tabs),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var tab = _step7.value;
          tab.addEventListener('click', function (e) {
            var _iterator8 = _createForOfIteratorHelper(tabs),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _tab = _step8.value;

                _tab.classList.remove('active');
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            e.currentTarget.classList.add('active');
          });
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  })();

  (function () {
    var dragItems = document.querySelectorAll('.draggable');
    var dropZones = document.querySelectorAll('.drag-zone');
    var draggedItem = null;
    var droppedItem = null;
    dragItems.forEach(function (dragItem) {
      dragItem.addEventListener('dragstart', handleDragStart);
      dragItem.addEventListener('dragend', handleDragEnd);
      dragItem.addEventListener('drag', handleDrag);
      dragItem.addEventListener('dragenter', function () {
        if (draggedItem !== droppedItem) {
          droppedItem = dragItem;
        }
      });
      dragItem.addEventListener('dragleave', function () {
        droppedItem = null;
      });
    });
    dropZones.forEach(function (dropZone) {
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
      var _this$querySelector;

      // const dragFlag = e.dataTransfer.getData('dragItem');
      // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
      // this.append(dragItem);
      (_this$querySelector = this.querySelector('.appearance-sidebar-title')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.classList.add('active');

      if (droppedItem) {
        if (droppedItem.parentElement === draggedItem.parentElement) {
          var children = Array.from(droppedItem.parentElement.children);
          var draggedIndex = children.indexOf(draggedItem);
          var droppedIndex = children.indexOf(droppedItem);

          if (draggedIndex > droppedIndex) {
            draggedItem.parentElement.insertBefore(draggedItem, droppedItem);
          } else {
            draggedItem.parentElement.insertBefore(draggedItem, droppedItem.nextElementSibling);
          }
        } else {
          this.insertBefore(draggedItem, droppedItem);
        }
      } else {
        this.append(draggedItem);
      }
    }
  })();

  (function () {
    Dropzone.autoDiscover = false;
    var dropzoneID = document.getElementById('dropzone');

    if (dropzoneID) {
      var myDropzone = new Dropzone(dropzoneID, {
        url: '/file/post'
      });
    }
  })();

  var charts = {};
  var gridLine;
  var titleColor;

  (function () {
    /* Add gradient to chart */
    var width, height, gradient;

    function getGradient(ctx, chartArea) {
      var chartWidth = chartArea.right - chartArea.left;
      var chartHeight = chartArea.bottom - chartArea.top;

      if (gradient === null || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
      }

      return gradient;
    }
    /* Visitors chart */


    var ctx = document.getElementById('myChart');

    if (ctx) {
      var myCanvas = ctx.getContext('2d');
      var myChart = new Chart(myCanvas, {
        type: 'line',
        data: {
          labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Last 6 months',
            data: [35, 27, 40, 15, 30, 25, 45],
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            backgroundColor: ['rgba(95, 46, 234, 1)'],
            borderColor: ['rgba(95, 46, 234, 1)'],
            borderWidth: 2
          }, {
            label: 'Previous',
            data: [20, 36, 16, 45, 29, 32, 10],
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            backgroundColor: ['rgba(75, 222, 151, 1)'],
            borderColor: ['rgba(75, 222, 151, 1)'],
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 25
              },
              grid: {
                display: false
              }
            },
            x: {
              grid: {
                color: gridLine
              }
            }
          },
          elements: {
            point: {
              radius: 2
            }
          },
          plugins: {
            legend: {
              position: 'top',
              align: 'end',
              labels: {
                boxWidth: 8,
                boxHeight: 8,
                usePointStyle: true,
                font: {
                  size: 12,
                  weight: '500'
                }
              }
            },
            title: {
              display: true,
              text: ['Visitor statistics', 'Nov - July'],
              align: 'start',
              color: '#171717',
              font: {
                size: 16,
                family: 'Inter',
                weight: '600',
                lineHeight: 1.4
              }
            }
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          }
        }
      });
      charts.visitors = myChart;
    }
    /* Customers chart */


    var customersChart = document.getElementById('customersChart');

    if (customersChart) {
      var customersChartCanvas = customersChart.getContext('2d');
      var myCustomersChart = new Chart(customersChartCanvas, {
        type: 'line',
        data: {
          labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: '+958',
            data: [90, 10, 80, 20, 70, 30, 50],
            tension: 0.4,
            backgroundColor: function backgroundColor(context) {
              var chart = context.chart;
              var ctx = chart.ctx,
                  chartArea = chart.chartArea;

              if (!chartArea) {
                // This case happens on initial chart load
                return null;
              }

              return getGradient(ctx, chartArea);
            },
            borderColor: ['#fff'],
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 1
            }
          },
          plugins: {
            legend: {
              position: 'top',
              align: 'end',
              labels: {
                color: '#fff',
                size: 18,
                fontStyle: 800,
                boxWidth: 0
              }
            },
            title: {
              display: true,
              text: ['New Customers', '28 Daily Avg.'],
              align: 'start',
              color: '#fff',
              font: {
                size: 16,
                family: 'Inter',
                weight: '600',
                lineHeight: 1.4
              },
              padding: {
                top: 20
              }
            }
          },
          maintainAspectRatio: false
        }
      });
      customersChart.customers = myCustomersChart;
    }
  })();
  /* Change data of all charts */


  function addData() {
    var darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
      gridLine = '#37374F';
      titleColor = '#EFF0F6';
    } else {
      gridLine = '#EEEEEE';
      titleColor = '#171717';
    }

    if (charts.hasOwnProperty('visitors')) {
      charts.visitors.options.scales.x.grid.color = gridLine;
      charts.visitors.options.plugins.title.color = titleColor;
      charts.visitors.options.scales.y.ticks.color = titleColor;
      charts.visitors.options.scales.x.ticks.color = titleColor;
      charts.visitors.update();
    }
  }

  addData();

  (function () {
    var element = document.querySelector('.editor');
    var options = {
      modules: {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['image', 'blockquote', 'code-block'], [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }], [{
          indent: '-1'
        }, {
          indent: '+1'
        }], [{
          size: ['small', false, 'large', 'huge']
        }], [{
          header: [1, 2, 3, 4, 5, 6, false]
        }], [{
          color: []
        }, {
          background: []
        }], [{
          font: []
        }], [{
          align: []
        }], ['formula'], ['clean']]
      },
      placeholder: 'Write your text here',
      theme: 'snow'
    };

    if (element) {
      var editor = new Quill(element, options);
    }
  })();

  (function () {
    var tagContainer = document.querySelector('.tag-container');

    if (tagContainer) {
      var createTag = function createTag(label) {
        var div = document.createElement('div');
        div.setAttribute('class', 'tag');
        var span = document.createElement('span');
        span.setAttribute('class', 'tag__title');
        span.innerHTML = label;
        var closeBtn = document.createElement('i');
        closeBtn.setAttribute('class', 'icon');
        closeBtn.setAttribute('data-item', label);
        closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        div.appendChild(span);
        div.appendChild(closeBtn);
        return div;
      };

      var reset = function reset() {
        document.querySelectorAll('.tag').forEach(function (tag) {
          tag.parentElement.removeChild(tag);
        });
      };

      var addTags = function addTags() {
        reset();
        tags.slice().reverse().forEach(function (tag) {
          var input = createTag(tag);
          tagContainer.prepend(input);
        });
      };

      var input = document.querySelector('.tag-container input');
      var tags = [];
      input.addEventListener('keyup', function (e) {
        var trimmed = input.value.replace(/\s+/g, ' ').trim();

        if (e.keyCode === 32 && trimmed.length >= 2) {
          tags.push(input.value);
          addTags();
          input.value = '';
        }
      });
      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('icon')) {
          e.target.parentElement.remove();
        }
      });
      var tagBtns = document.querySelectorAll('.tag-btn');
      tagBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          var value = btn.textContent;
          createTag(value);
          tags.push(value);
          addTags();
        });
      });
    }
  })();
});