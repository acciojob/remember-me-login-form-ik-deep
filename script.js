//your JS code here. If required.
   document.addEventListener('DOMContentLoaded', function () {
      const loginForm = document.getElementById('loginForm');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const checkboxInput = document.getElementById('checkbox');

      // Check if there are saved details
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        const existingUserButton = document.createElement('button');
        existingUserButton.id = 'existing';
        existingUserButton.textContent = 'Login as existing user';
        existingUserButton.addEventListener('click', function () {
          alert(`Logged in as ${savedUsername}`);
        });

        document.body.appendChild(existingUserButton);
      }

      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkboxInput.checked) {
          // Save details to local storage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Remove saved details from local storage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
      });
    });