function checkPassword() {
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "notreSecret") {
    window.location.href = "invitation.html"; // Redirige vers la page d'invitation
  } else {
    errorMessage.textContent = "Mot de passe incorrect !";
  }
}
