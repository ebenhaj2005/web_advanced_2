let nederlands = document.getElementById("Nederlands");
let frans = document.getElementById("Frans");
let text = document.getElementById("text-maps");
let slagerijheader = document.getElementById("Slagerijnaam");
let onsheader = document.getElementById("Onsnaam");

nederlands.addEventListener("click", function () {
  slagerijheader.innerHTML = "Slagerij";
  onsheader.innerHTML = "Over ons";
  localStorage.setItem("language", "nederlands");
});

frans.addEventListener("click", function () {
  slagerijheader.innerHTML = "Boucherie";
  onsheader.innerHTML = "A propos de nous";
  localStorage.setItem("language", "Français");

  
});



function kiestaal() {
  if (localStorage.getItem("language") === "nederlands") {
    nederlands.click();
  } else if (localStorage.getItem("language") === "Français") {
    frans.click();
  }
}

window.addEventListener("DOMContentLoaded", kiestaal);