const enterBtn = document.getElementById("enter-btn");
const welcome = document.querySelector(".welcome");
const main = document.querySelector(".main");

enterBtn.addEventListener("click", () => {
  welcome.classList.add("hidden");
  main.classList.remove("hidden");
  alert("Welcome to BANGSAFE 🔐");
});