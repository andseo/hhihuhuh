// Add this file to your project to handle form validations

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('#loginForm');
    var registerForm = document.querySelector('#registerForm');
  
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    function validatePassword(password) {
      // Minimum eight characters, at least one letter and one number:
      var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    }
  
    if (registerForm) {
      registerForm.addEventListener('submit', function(event) {
        var email = document.querySelector('#registerEmail').value;
        var password = document.querySelector('#registerPassword').value;
  
        if (!validateEmail(email)) {
          event.preventDefault();
          alert('Please enter a valid email address.');
        }
  
        if (!validatePassword(password)) {
          event.preventDefault();
          alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        }
      });
    }
    
    // Similar validation can be done for login form
  });
  