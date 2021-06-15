let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
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
        radius: 0,
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
  },
});
