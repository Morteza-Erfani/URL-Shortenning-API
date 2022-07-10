let id = 1;

function shorter(longUrl) {
  const answers = document.querySelector(".answers");
  const div = document.createElement("div");
  const para = document.createElement("p");
  const hr = document.createElement("hr");
  const link = document.createElement("a");
  const button = document.createElement("button");

  para.innerText = longUrl;
  // link.innerText = "shorter version";
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

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: {
      apikey: "6a1da2968c1c45edb0aae769cff193d7",
      workspace: "3425c75cbda546089b184d93f3b2af3a",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      destination: `${longUrl}`,
      domain: { fullName: "rebrand.ly" },
    }),
  })
    .then((Response) => Response.json())
    .then((JSON) => link.innerText = JSON.shortUrl);

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


