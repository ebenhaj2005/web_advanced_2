let nederlands = document.getElementById('Nederlands');
let frans = document.getElementById('Frans');

let slagerijheader = document.getElementById('Slagerijnaam');
let onsheader = document.getElementById('Onsnaam');
let textitel = document.getElementById('textitel');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let titelpagina = document.getElementById('titelpage');






let textcontact = document.getElementById('textcontact');

nederlands.addEventListener('click', function() {
    slagerijheader.innerText = "Slagerij";
    onsheader.innerText = "Over ons";
    localStorage.setItem('language', 'nederlands'); 
textitel.innerText = "Contacteer ons";
text1.innerText = "Bij Bill Market staan we erop om u een uitstekende klantenservice te bieden. Daarom zijn 24/7 beschikbaar om al uw vragen of zorgen te beantwoorden.";
text2.innerText = "Aarzel niet om ons op elk moment te contacteren via het volgende email adres: info@billmarket.be";
text3.innerText ="We staan klaar om u te helpen!"
titelpagina.innerText = "NEEM CONTACT MET ONS OP";
});

frans.addEventListener('click', function() {
    localStorage.setItem('language', 'Français');
   slagerijheader.innerText = "Boucherie";
    onsheader.innerText = "A propos de nous";
   textitel.innerText = "Contactez-nous";
   text1.innerText = "Chez Bill Market, nous nous engageons à vous offrir un excellent service client. C'est pourquoi nous sommes disponibles 24/7 pour répondre à toutes vos questions ou préoccupations.";
text2.innerText = "N'hésitez pas à nous contacter à tout moment à l'adresse e-mail suivante: info@billmarket.be";
text3.innerText ="Nous sommes prêts à vous aider!"
titelpagina.innerText = "CONTACTEZ NOUS";
});

  (function kiestaal() {
    if (localStorage.getItem("language") === "nederlands") {
      nederlands.click();
    } else if (localStorage.getItem("language") === "Français") {
      frans.click();
    }
    console.log('taal gekozen')
  })();

