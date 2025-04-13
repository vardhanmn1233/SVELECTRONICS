window.onload = function () {
  // Retrieve user info from localStorage
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!storedUser) {
    alert("No user logged in. Redirecting to login page.");
    window.location.href = "login.html";
    return;
  }

  const user = storedUser;

  // Safely populate user info if elements exist
  const nameElem = document.getElementById("user-name");
  const idElem = document.getElementById("user-id");
  const emailElem = document.getElementById("user-email");
  const phoneElem = document.getElementById("user-phone");
  const addressElem = document.getElementById("user-address");

  if (nameElem) nameElem.innerText = user.name;
  if (idElem) idElem.innerText = user.userId;
  if (emailElem) emailElem.innerText = user.email;
  if (phoneElem) phoneElem.innerText = user.phone;
  if (addressElem) addressElem.innerText = user.address;

  // Populate orders
  const orderTable = document.getElementById("order-table-body");
  if (orderTable) {
    orderTable.innerHTML = ""; // Clear existing rows

    user.orders.forEach(order => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.item}</td>
        <td>${order.date}</td>
        <td><span class="status ${order.status.toLowerCase()}">${order.status}</span></td>
      `;
      orderTable.appendChild(row);
    });
  }
};

// Edit Profile button function
function editProfile() {
  alert("Redirecting to edit profile page...");
  // Uncomment the below line if an edit-profile page exists:
  // window.location.href = 'edit-profile.html';
}

// Logout button function
function logoutUser() {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully.");
    window.location.href = 'login.html';
  }
}
