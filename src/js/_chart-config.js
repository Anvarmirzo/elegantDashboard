let charts = {};
let gridLine;
let titleColor;

(function () {
  /* Add gradient to chart */
  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
    }
    return gradient;
  }

  /* Visitors chart */
  let ctx = document.getElementById('myChart');
  if (ctx) {
    let myCanvas = ctx.getContext('2d');
    let myChart = new Chart(myCanvas, {
      type: 'line',
      data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Last 6 months',
            data: [35, 27, 40, 15, 30, 25, 45],
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            backgroundColor: ['rgba(95, 46, 234, 1)'],
            borderColor: ['rgba(95, 46, 234, 1)'],
            borderWidth: 2,
          },
          {
            label: 'Previous',
            data: [20, 36, 16, 45, 29, 32, 10],
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            backgroundColor: ['rgba(75, 222, 151, 1)'],
            borderColor: ['rgba(75, 222, 151, 1)'],
            borderWidth: 2,
          },
        ],
      },

      options: {
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 25,
            },
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              color: gridLine,
            },
          },
        },
        elements: {
          point: {
            radius: 2,
          },
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
                weight: '500',
              },
            },
          },
          title: {
            display: true,
            text: ['Visitor statistics', 'Nov - July'],
            align: 'start',
            color: '#171717',
            font: { size: 16, family: 'Inter', weight: '600', lineHeight: 1.4 },
          },
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });
    charts.visitors = myChart;
  }

  /* Customers chart */
  let customersChart = document.getElementById('customersChart');
  if (customersChart) {
    let customersChartCanvas = customersChart.getContext('2d');
    let myCustomersChart = new Chart(customersChartCanvas, {
      type: 'line',
      data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: '+958',
            data: [90, 10, 80, 20, 70, 30, 50],
            tension: 0.4,
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                // This case happens on initial chart load
                return null;
              }
              return getGradient(ctx, chartArea);
            },
            borderColor: ['#fff'],
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 1,
          },
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              color: '#fff',
              size: 18,
              fontStyle: 800,
              boxWidth: 0,
            },
          },
          title: {
            display: true,
            text: ['New Customers', '28 Daily Avg.'],
            align: 'start',
            color: '#fff',
            font: { size: 16, family: 'Inter', weight: '600', lineHeight: 1.4 },
            padding: {
              top: 20,
            },
          },
        },
        maintainAspectRatio: false,
      },
    });
    customersChart.customers = myCustomersChart;
  }
})();

/* Change data of all charts */
function addData() {
  let darkMode = localStorage.getItem('darkMode');
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
