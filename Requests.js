
function loadRequests() {

  const table = document.getElementById("requestsTable");
  const requests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];

  table.innerHTML = "";

  let total = requests.length;
  let pending = 0;
  let approved = 0;
  let declined = 0;

  requests.forEach(req => {

    if (req.status === "Pending Review") pending++;
    if (req.status === "Approved") approved++;
    if (req.status === "Declined") declined++;

    let statusClass = "pending";
    if (req.status === "Approved") statusClass = "approved";
    if (req.status === "Declined") statusClass = "declined";

    const row = `
      <tr>
        <td>
          <strong>${req.name}</strong><br>
          ${req.email}<br>
          ${req.phone}
        </td>

        <td>
          <strong>${req.petName}</strong><br>
          <span style="color:#666;">${req.petType} • ${req.petAge}</span>
        </td>

        <td>${req.date}</td>

        <td>
          <span class="status ${statusClass}">
            ${req.status}
          </span>
        </td>
      </tr>
    `;

    table.innerHTML += row;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("pending").innerText = pending;
  document.getElementById("approved").innerText = approved;
  document.getElementById("declined").innerText = declined;
}

window.onload = loadRequests;




