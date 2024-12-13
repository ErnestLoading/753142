const themeToggleBtn = document.getElementById("theme-toggle");
const body= document.body;

const updateButton = () => {
  if (body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent="Šviesus režimas";
  } else {
    themeToggleBtn.textContent="Tamsus režimas";
  }
};

themeToggleBtn.addEventListener("click", () =>{
  body.classList.toggle("dark-mode");
  updateButton();
});
updateButton();