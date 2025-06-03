const fileInput = document.getElementById('fileInput');
const uploadStatus = document.getElementById('uploadStatus');
const uploadedList = document.getElementById('uploadedList');
const summary = document.getElementById('summary');

// Fake uploaded file handling
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    uploadStatus.textContent = `Uploaded: ${file.name}`;
    const li = document.createElement('li');
    li.textContent = file.name;
    uploadedList.appendChild(li);
    summary.textContent = `📌 AI Summary (mock): "${file.name}" contains structured tabular data ready for visualization.`;
  }
});

// Fake chart generator
function generateChart() {
  const ctx = document.getElementById('chartCanvas').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [{
        label: 'Sample Y',
        data: [10, 20, 30],
        backgroundColor: '#3182ce'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}
