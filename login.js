const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Client-side validation
  if (!username || !email || !password) {
    message.textContent = "⚠️ Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  // Send data to backend
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = data.message;
      message.style.color = 'green';
      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000);
    } else {
      message.textContent = data.message;
      message.style.color = 'red';
    }
  } catch (error) {
    console.error("Error:", error);
    message.textContent = "Server error. Please try again later.";
    message.style.color = "red";
  }
});

