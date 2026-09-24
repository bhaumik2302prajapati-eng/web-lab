console.log("JS is connected! 🚀");

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
});