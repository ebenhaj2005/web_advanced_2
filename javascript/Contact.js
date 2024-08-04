let nederlands = document.getElementById('Nederlands');
let frans = document.getElementById('Frans');

let slagerijheader = document.getElementById('Slagerijnaam');
let onsheader = document.getElementById('Onsnaam');
let text = document.getElementById('title');
let telnummersuper = document.getElementById('telsupermarkt');
let telnummerslagerij = document.getElementById('telslagerij');
let titeluur = document.getElementById('titeltabel');
let zondag = document.getElementById('Zondag');
let maandag = document.getElementById('Maandag');
let dinsdag = document.getElementById('Dinsdag');
let woensdag = document.getElementById('Woensdag');
let donderdag = document.getElementById('Donderdag');
let vrijdag = document.getElementById('Vrijdag');
let zaterdag = document.getElementById('Zaterdag');
let contactus = document.getElementById('contactus');
let vraag = document.getElementById('vraag');
let Naam = document.getElementById('Naam');
let Bericht = document.getElementById('Bericht');
let inputnaam = document.getElementById('input');



nederlands.addEventListener('click', function() {
    slagerijheader.innerHTML = "Slagerij";
    onsheader.innerHTML = "Over ons";
    localStorage.setItem('language', 'nederlands'); 
    text.innerHTML = "Neem contact op met ons";
telnummersuper.innerHTML = "Telefoonnummer supermarkt :";
telnummerslagerij.innerHTML = "Telefoonnummer slagerij :";
titeluur.innerHTML = "Openingsuren";
zondag.innerHTML = "Zondag";
maandag.innerHTML = "Maandag";
dinsdag.innerHTML = "Dinsdag";
woensdag.innerHTML = "Woensdag";
donderdag.innerHTML = "Donderdag";
vrijdag.innerHTML = "Vrijdag";
zaterdag.innerHTML = "Zaterdag";
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
    zondag.innerHTML = "Dimanche";
    maandag.innerHTML = "Lundi";
    dinsdag.innerHTML = "Mardi";
    woensdag.innerHTML = "Mercredi";
    donderdag.innerHTML = "Jeudi";
    vrijdag.innerHTML = "Vendredi";
    zaterdag.innerHTML = "Samedi";
    contactus.innerHTML = "Contactez-nous";
    vraag.innerHTML = "Vous avez une question? N'hésitez pas à nous contacter!";
Naam.innerHTML = "Nom";
Bericht.innerHTML = "Message";
inputnaam.value = "envoyer";
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