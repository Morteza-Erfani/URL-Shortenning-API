const inputValue = document.querySelector("form input");
document.querySelector("form button").addEventListener("click", (event) => {
  event.preventDefault();
  if (inputValue.value == "") {
    inputValue.style.border = "red 2px solid";
    inputValue.style.setProperty("--placeholder", "red");
    document.querySelector(".err").style.visibility = "visible";
  } else {
    document.querySelector(".err").style.visibility = "hidden";
    inputValue.style.border = "none";
    inputValue.style.setProperty("--placeholder", "--placeholder");
    shorter(inputValue.value);
  }
});