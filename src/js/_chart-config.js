(function () {
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
  }

  /* ############################### */

  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
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
            data: [45, 17, 50, 25, 70, 35, 90],
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
            radius: 0,
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
  }
})();
