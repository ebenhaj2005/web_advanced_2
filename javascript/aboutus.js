let nederlands = document.getElementById("Nederlands");
let frans = document.getElementById("Frans");
let text = document.getElementById("text-maps");
let slagerijheader = document.getElementById("Slagerijnaam");
let onsheader = document.getElementById("Onsnaam");
let titeltabel = document.getElementById('titeltabel')


nederlands.addEventListener("click", function () {
  slagerijheader.innerHTML = "Slagerij";
  onsheader.innerHTML = "Over ons";
  titeltabel.innerHTML = "Openingsuren";
  localStorage.setItem("language", "nederlands");
});

frans.addEventListener("click", function () {
  slagerijheader.innerHTML = "Boucherie";
  onsheader.innerHTML = "A propos de nous";
  titeltabel.innerHTML = "Heures d'ouverture";
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

const openingsuren = [
  {
    dag: "Maandag",
    Uur: "9:00 - 20:00",
  },
  { dag: "Dinsdag", Uur: "9:00 - 20:00" },
  { dag: "Woensdag", Uur: "9:00 - 20:00" },
  { dag: "Donderdag", Uur: "9:00 - 20:00" },
  { dag: "Vrijdag", Uur: "9:00 - 20:00" },
  { dag: "Zaterdag", Uur: "9:00 - 20:00" },
  { dag: "Zondag", Uur: "9:00 - 20:00" },
];

let body = document.getElementById("openingsuren2");

openingsuren.forEach(item => {
  const rij = document.createElement("tr");
  const dagen = document.createElement("th");
  dagen.textContent = item.dag;
  const uurcel = document.createElement("td");
  uurcel.textContent = item.Uur;
  rij.appendChild(dagen);
  rij.appendChild(uurcel);

  body.appendChild(rij)

});