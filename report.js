// Sample Report Data
const reports = [
  { name: "Sales Report Q1", date: "2025-03-20", file: "sales_q1.pdf" },
  { name: "Revenue Analysis", date: "2025-04-10", file: "revenue_analysis.pdf" },
  { name: "User Growth", date: "2025-05-01", file: "user_growth_chart.png" }
];

const reportBody = document.getElementById("reportBody");

// Render reports
reports.forEach((report, index) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${report.name}</td>
    <td>${report.date}</td>
    <td><a class="btn" href="reports/${report.file}" download>Download</a></td>
    <td><button class="btn" onclick="generateAISummary(${index})">AI Summary</button></td>
  `;

  reportBody.appendChild(tr);
});

// AI Summary Simulation
function generateAISummary(index) {
  const report = reports[index];
  alert(`🧠 Generating AI summary for: ${report.name}\n(This is a simulated preview)`);
}
