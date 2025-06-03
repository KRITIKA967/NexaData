function analyzeData() {
  const fileInput = document.getElementById("excelUpload");
  const summaryBox = document.getElementById("summaryBox");

  if (!fileInput.files.length) {
    alert("Please upload an Excel file first.");
    return;
  }

  // Simulated analysis output
  summaryBox.innerHTML = `
    <ul>
      <li><strong>📁 Rows Detected:</strong> 152</li>
      <li><strong>📈 Most Common Category:</strong> Services</li>
      <li><strong>📊 Average Revenue:</strong> ₹38,450</li>
      <li><strong>📉 Trend:</strong> Seasonal drop in Q3</li>
    </ul>
  `;
}
