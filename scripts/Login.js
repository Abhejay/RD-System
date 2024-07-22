// src/scripts/login.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const createAccountButton = document.getElementById('create-account-button');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Handle login logic here (e.g., send credentials to backend)
      console.log('Logging in with', email, password);
    });
  
    createAccountButton.addEventListener('click', () => {
      // Redirect to the account creation page or show account creation form
      console.log('Redirect to account creation page');
    });
  });
  