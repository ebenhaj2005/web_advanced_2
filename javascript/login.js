

const kiestaalNL = "nederlands";
const kiestaalFR = "Français";

function kiestaal() {
  if (localStorage.getItem("language") === kiestaalNL) {
    nederlands.click();
  } else if (localStorage.getItem("language") === kiestaalFR) {
    frans.click();
  }
}

window.addEventListener("DOMContentLoaded", kiestaal);

const Naam = document.getElementById("Naam-input");
const Postcode = document.getElementById("postcode-input");
const form = document.getElementById("form");
const error = document.getElementById("error");



form.addEventListener("submit", (e) => {
  const msg = ["Gelieve een geldige postcode in te vullen", "Gelieve uw postcode in te vullen om op de website van Bill Market te komen", "Gelieve uw naam in te vullen om op de website van Bill Market te komen"];
  const[a,b,c] = msg; // Destructuring
  let message = [];
  e.preventDefault();
  let naam2 = Naam.value;
  if (naam2 === "" || naam2 === null) {
    message.push(
      c
    );
  }
  if (Postcode.value.length < 4 && Postcode.value.length != 0) {
    message.push(a);
  }
  if (Postcode.value === "" || Postcode.value === null) {
    message.push(
     b
    );
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerText =  message.join(` , ${"\n"}`);
  } else {
    window.location.href = "../html/Main.html";
  }
});

