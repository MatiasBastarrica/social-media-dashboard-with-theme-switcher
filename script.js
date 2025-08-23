const body = document.querySelector("body");

const toggleSwitch = document.querySelector("input[type='checkbox']");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});
