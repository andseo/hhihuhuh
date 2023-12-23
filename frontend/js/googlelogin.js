function googleSignIn() {
    // Implement your Google Sign-In logic here
}
  
function emailSignIn() {
    // Redirect to your email login form
    window.location.href = 'http://localhost/khadamat%20website/frontend/pages/login.html';
}
  
// This function is triggered after a user successfully signs in to Google.
function onSignIn(googleUser) {
    // Get the user's profile information.
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
  
    // The ID token you need to pass to your backend.
    var id_token = googleUser.getAuthResponse().id_token;
  
    // Here, instead of sending the ID token to the server, you could directly log the user in,
    // store the details in a session, or whatever is required for your user experience.
    // For example, you could store the user's name and email in localStorage.
    localStorage.setItem('userName', profile.getName());
    localStorage.setItem('userEmail', profile.getEmail());
  
    // Redirect the user to another page or change the UI to show a logged-in state.
    window.location.href = 'http://localhost/khadamat%20website/frontend/pages/index.html'; // Redirect to a welcome page or dashboard
  }
  

// This function is for signing out the user.
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
  
      // Clear the local storage or session.
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
  
      // Update the UI to a signed-out state.
      // Redirect to the login page or update the UI accordingly.
      window.location.href = 'http://localhost/khadamat%20website/frontend/pages/login.html';
    });
  }
  

// No changes needed for emailSignIn function.
function emailSignIn() {
  // Redirect to your email login form.
  window.location.href = 'http://localhost/khadamat%20website/frontend/pages/login.html';
}