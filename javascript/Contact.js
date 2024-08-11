let nederlands = document.getElementById('Nederlands');
let frans = document.getElementById('Frans');

let slagerijheader = document.getElementById('Slagerijnaam');
let onsheader = document.getElementById('Onsnaam');
let text = document.getElementById('title');
let telnummersuper = document.getElementById('telsupermarkt');
let telnummerslagerij = document.getElementById('telslagerij');
let titeluur = document.getElementById('titeltabel');
let titelcontact = document.getElementById('titlecontact');
let contactus = document.getElementById('contactus');
let vraag = document.getElementById('vraag');
let Naam = document.getElementById('Naam');
let Bericht = document.getElementById('Bericht');
let inputnaam = document.getElementById('input');

let textcontact = document.getElementById('textcontact');

nederlands.addEventListener('click', function() {
    slagerijheader.innerHTML = "Slagerij";
    onsheader.innerHTML = "Over ons";
    localStorage.setItem('language', 'nederlands'); 
    text.innerHTML = "Neem contact op met ons";
telnummersuper.innerHTML = "Telefoonnummer supermarkt :";
telnummerslagerij.innerHTML = "Telefoonnummer slagerij :";
titeluur.innerHTML = "Openingsuren";

contactus.innerHTML = "Contacteer ons";
vraag.innerHTML = "Heeft u een vraag? Aarzel niet om ons te contacteren!";
Naam.innerHTML = "Naam";
Bericht.innerHTML = "Bericht";
inputnaam.value = "verzend";
    
});

frans.addEventListener('click', function() {
    localStorage.setItem('language', 'Français');
   slagerijheader.innerHTML = "Boucherie";
    onsheader.innerHTML = "A propos de nous";
    text.innerHTML = "Contactez-nous";
    telnummersuper.innerHTML = "Numéro de téléphone supermarché :";
    telnummerslagerij.innerHTML = "Numéro de téléphone boucherie :";
    titeluur.innerHTML = "Heures d'ouverture";
titelcontact.innerHTML = "Contactez-nous 24h/24";
    contactus.innerHTML = "Contactez-nous";
    vraag.innerHTML = "Vous avez une question? N'hésitez pas à nous contacter!";



});

const kiestaalNL = "nederlands";
  const kiestaalFR = "Français";

 function kiestaal() {
  if (localStorage.getItem("language") === kiestaalNL) {
    nederlands.click();
  } else if (localStorage.getItem("language") === kiestaalFR) {
    frans.click();
  }
}

window.addEventListener('DOMContentLoaded', kiestaal);