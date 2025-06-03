// Include this script after loading Chart.js and after your HTML form & container

const chartForm = document.getElementById('chartForm');
const chartArea = document.getElementById('chartArea');
let myChart;

// Sample data — replace with your actual Excel data later
const sampleData = {
  Month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  Sales: [120, 150, 180, 140, 170, 210],
  Revenue: [1000, 1150, 1300, 1250, 1400, 1550],
  Profit: [300, 350, 370, 360, 390, 420]
};

chartForm.addEventListener('submit', e => {
  e.preventDefault();

  const xCol = document.getElementById('xAxis').value;
  const yCol = document.getElementById('yAxis').value;
  const chartType = document.getElementById('chartType').value;

  if (!xCol || !yCol || !chartType) {
    alert('Please select X-Axis, Y-Axis, and Chart Type.');
    return;
  }

  // Destroy previous chart instance to avoid overlap
  if (myChart) {
    myChart.destroy();
  }

  const labels = sampleData[xCol] || [];
  const dataPoints = sampleData[yCol] || [];

  // Clear chart container and create canvas element
  chartArea.innerHTML = '<canvas id="chartCanvas"></canvas>';
  const ctx = document.getElementById('chartCanvas').getContext('2d');

  // Map 3D chart to 'bar' as placeholder
  const type = chartType === '3d' ? 'bar' : chartType;

  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: `${yCol} vs ${xCol}`,
        data: dataPoints,
        backgroundColor: 'rgba(43, 108, 176, 0.7)',
        borderColor: 'rgba(43, 82, 130, 0.9)',
        borderWidth: 2,
        fill: chartType === 'line' ? false : true,
        pointRadius: chartType === 'scatter' ? 6 : 0
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 700,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            font: { size: 14 },
            color: '#2b6cb0'
          }
        },
        title: {
          display: true,
          text: `${chartType.toUpperCase()} Chart: ${yCol} vs ${xCol}`,
          font: {
            size: 20,
            weight: '700'
          },
          color: '#2b6cb0',
          padding: {
            top: 10,
            bottom: 30
          }
        },
        tooltip: {
          enabled: true,
          mode: 'nearest',
          intersect: false,
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: xCol,
            font: { size: 16, weight: '600' },
            color: '#2b6cb0'
          },
          grid: {
            color: '#e2e8f0'
          }
        },
        y: {
          title: {
            display: true,
            text: yCol,
            font: { size: 16, weight: '600' },
            color: '#2b6cb0'
          },
          grid: {
            color: '#e2e8f0'
          }
        }
      }
    }
  });
});

