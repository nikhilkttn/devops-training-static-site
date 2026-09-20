const button = document.getElementById("deployButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "GitHub Actions deployment is working!";
});