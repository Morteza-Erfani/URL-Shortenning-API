const humIcon = document.querySelector(".humberger");
const humMenu = document.querySelector(".humberger-menu");

humIcon.addEventListener("click", openHum);
let open = 0;

function openHum() {
  if (open == 0) {
    humMenu.style.opacity = 1;
    humMenu.style.zIndex = 10;
    document.querySelector("#first-hum").classList = "first-active";
    document.querySelector("#second-hum").classList = "second-active";
    document.querySelector("#third-hum").classList = "third-active";
    open = 1;
  } else {
    humMenu.style.opacity = 0;
    document.querySelector("#first-hum").classList = "";
    document.querySelector("#second-hum").classList = "";
    document.querySelector("#third-hum").classList = "";
    open = 0;
  }
}

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

let id = 1;

function shorter(longUrl) {
  const answers = document.querySelector(".answers");
  const div = document.createElement("div");
  const para = document.createElement("p");
  const hr = document.createElement("hr");
  const link = document.createElement("a");
  const button = document.createElement("button");

  para.innerText = longUrl;
  link.innerText = "shorter version";
  link.setAttribute("href", "#");
  link.setAttribute("id", `${id}`);
  button.innerText = "Copy";
  button.setAttribute("class", `${id}`);

  id++;

  div.appendChild(para);
  div.appendChild(hr);
  div.appendChild(link);
  div.appendChild(button);

  answers.appendChild(div);

  id > 1 ? activeButton() : "";
}

function activeButton() {
  const answers = document.querySelectorAll(".answers button");
  answers.forEach(copyButton);
}

function copyButton(e) {
  e.addEventListener("click", (e) => {
    myId = e.srcElement.className;
    short = document.getElementById(`${myId}`).innerText;
    navigator.clipboard.writeText(short);
    e.srcElement.style.backgroundColor = "var(--primary-dark-violet)";
    e.srcElement.innerText = "Copied!";
  });
}
