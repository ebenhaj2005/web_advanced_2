let nederlands = document.getElementById('Nederlands');
let frans = document.getElementById('Frans');

let slagerijheader = document.getElementById('Slagerijnaam');
let onsheader = document.getElementById('Onsnaam');
let text = document.getElementById('title');
let telnummersuper = document.getElementById('telsupermarkt');
let telnummerslagerij = document.getElementById('telslagerij');
let titeluur = document.getElementById('titeltabel');
let contact24 = document.getElementById('contactus24');



let textcontact = document.getElementById('textcontact');

nederlands.addEventListener('click', function() {
    slagerijheader.innerText = "Slagerij";
    onsheader.innerText = "Over ons";
    localStorage.setItem('language', 'nederlands'); 

telnummersuper.innerText = "Telefoonnummer supermarkt :";
telnummerslagerij.innerText = "Telefoonnummer slagerij :";
text.innerText = "Neem contact op"
contact24.innerText = "Contacteer ons 24u/24"



textcontact.innerText = "Bij Bill Market staan we erop om u een uitstekende klantenservice te bieden. Daarom zijn we 24/7 beschikbaar om al uw vragen of zorgen te beantwoorden. Aarzel niet om ons op elk moment per e-mail te contacteren via het volgende adres: info@billmarket.com.  We staan klaar om u te helpen!";

});

frans.addEventListener('click', function() {
    localStorage.setItem('language', 'Français');
   slagerijheader.innerText = "Boucherie";
    onsheader.innerText = "A propos de nous";
   
    telnummersuper.innerText = "Numéro de téléphone supermarché :";
    telnummerslagerij.innerText = "Numéro de téléphone boucherie :";
text.innerText = "Contactez nous"
contact24.innerText = "Contactez-nous 24h/24";

  
    textcontact.innerText = "Chez Bill Market, nous mettons un point d'honneur à vous offrir un service client de qualité. C'est pourquoi nous sommes disponibles 24h/24 pour répondre à toutes vos questions ou préoccupations. N'hésitez pas à nous contacter à tout moment par email à l'adresse suivante : info@billmarket.com.       Nous sommes là pour vous aider !";
   



});

const kiestaalNL = "nederlands";
  const kiestaalFR = "Français";

  (function kiestaal() {
    if (localStorage.getItem("language") === "nederlands") {
      nederlands.click();
    } else if (localStorage.getItem("language") === "Français") {
      frans.click();
    }
    console.log('taal gekozen')
  })();

