const files = [
  { name: "sales_q1.xlsx", date: "2025-05-14", size: "245 KB" },
  { name: "revenue_analysis.xls", date: "2025-05-16", size: "187 KB" },
  { name: "growth_stats.xlsx", date: "2025-05-17", size: "302 KB" },
];

const fileListBody = document.getElementById("fileList");

files.forEach(file => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${file.name}</td>
    <td>${file.date}</td>
    <td>${file.size}</td>
    <td>
      <button class="action-btn" onclick="alert('View coming soon!')">View</button>
      <button class="action-btn" onclick="alert('Delete coming soon!')">Delete</button>
    </td>
  `;
  fileListBody.appendChild(row);
});


