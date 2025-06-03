const userList = document.getElementById("userList");
const newUserInput = document.getElementById("newUser");

const users = [
  { name: "John Doe" },
  { name: "Jane Admin" }
];

function renderUsers() {
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user.name}
      <span>
        <button class="btn" onclick="blockUser(${index})">Block</button>
        <button class="btn" onclick="deleteUser(${index})">Delete</button>
      </span>
    `;
    userList.appendChild(li);
  });
}

function addUser() {
  const name = newUserInput.value.trim();
  if (name) {
    users.push({ name });
    newUserInput.value = "";
    renderUsers();
  } else {
    alert("Please enter a username");
  }
}

function blockUser(index) {
  alert(`${users[index].name} has been blocked.`);
}

function deleteUser(index) {
  const confirmDelete = confirm(`Are you sure you want to delete ${users[index].name}?`);
  if (confirmDelete) {
    users.splice(index, 1);
    renderUsers();
  }
}

// On Load
renderUsers();

// AI Toggle
document.getElementById("aiToggle").addEventListener("change", function () {
  if (this.checked) {
    alert("AI access enabled.");
  } else {
    alert("AI access disabled.");
  }
});

