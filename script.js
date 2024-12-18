function checkPassword() {
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "caca") {
    window.location.href = "page1.html"; // Redirige vers la page d'invitation
  } else {
    errorMessage.textContent = "Mot de passe incorrect !";
  }
}
