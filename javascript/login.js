let naam = document.getElementById("Naam-input");

function opslaanData() {
  localStorage.setItem("gebruikerNaam", naam.value);
}
