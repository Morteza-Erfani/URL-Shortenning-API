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




