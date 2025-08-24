// script.js
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".scan-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        checkbox.parentElement.style.textDecoration = "line-through";
        checkbox.parentElement.style.color = "#7f8c8d";
      } else {
        checkbox.parentElement.style.textDecoration = "none";
        checkbox.parentElement.style.color = "#2c3e50";
      }
    });
  });
});
