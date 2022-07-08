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
