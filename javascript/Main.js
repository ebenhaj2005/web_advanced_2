let nederlands = document.getElementById("Nederlands");
let frans = document.getElementById("Frans");
let text = document.getElementById("text-maps");
let slagerijheader = document.getElementById("Slagerijnaam");
let onsheader = document.getElementById("Onsnaam");
let locatie = document.getElementById("loc");

nederlands.addEventListener("click", function () {
  text.innerHTML = `Bill Market is een populaire supermarktketen die strategisch gelegen is in het hart van de gemeente. De locatie van Bill Market bevindt zich aan de drukke Hoofdstraat. 
    Deze centrale ligging maakt de supermarkt gemakkelijk toegankelijk voor zowel de lokale bewoners als de pendelaars die dagelijks de gemeente bezoeken. Dankzij de nabijheid van openbaar vervoer, zoals bussen en treinen, is het eenvoudig om Bill Market te bereiken zonder auto.
    Bovendien is er voldoende parkeergelegenheid rondom de supermarkt voor klanten die met de auto komen.
    De omgeving van Bill Market is levendig en bruist van activiteit. Het gebied is omgeven door diverse winkels, restaurants en cafés, waardoor klanten hun boodschappen kunnen combineren met een gezellig dagje uit.
    De supermarkt zelf is ruim opgezet en biedt een breed assortiment aan producten, van verse groenten en fruit tot hoogwaardige vleeswaren en kant-en-klaarmaaltijden. Het vriendelijke personeel staat altijd klaar om te helpen en zorgt ervoor dat winkelen bij Bill Market een aangename ervaring is.
    Kortom, de locatie van Bill Market aan de Hoofdstraat maakt het een ideale bestemming voor iedereen die op zoek is naar gemak, kwaliteit en een ruime keuze aan producten. Of je nu snel even boodschappen wilt doen na het werk, of een uitgebreide winkelervaring zoekt,
    bij Bill Market ben je aan het juiste adres.`;
  slagerijheader.innerHTML = "Slagerij";
  onsheader.innerHTML = "Over ons";
  localStorage.setItem("language", "nederlands");
  locatie.innerHTML = "Locatie";
});

frans.addEventListener("click", function () {
  slagerijheader.innerHTML = "Boucherie";
  onsheader.innerHTML = "A propos de nous";
  localStorage.setItem("language", "Français");
locatie.innerHTML = "Emplacement";
  text.innerHTML =
    "Bill Market est une chaîne de supermarchés populaire stratégiquement située au cœur de la commune. L'emplacement de Bill Market se trouve sur la rue principale animée. Cette position centrale rend le supermarché facilement accessible aux habitants locaux ainsi qu'aux navetteurs qui visitent quotidiennement la commune. Grâce à la proximité des transports en commun, tels que les bus et les trains, il est facile de se rendre à Bill Market sans voiture. De plus, il y a suffisamment de places de parking autour du supermarché pour les clients qui viennent en voiture. Les environs de Bill Market sont vivants et animés. La zone est entourée de divers magasins, restaurants et cafés, permettant aux clients de combiner leurs courses avec une journée agréable. Le supermarché lui-même est spacieux et offre une large gamme de produits, des légumes et fruits frais aux charcuteries de haute qualité et aux plats préparés. Le personnel amical est toujours prêt à aider et s'assure que faire ses courses chez Bill Market est une expérience agréable. En bref, l'emplacement de Bill Market sur la rue principale en fait une destination idéale pour quiconque recherche commodité, qualité et un large choix de produits. Que vous souhaitiez faire vos courses rapidement après le travail ou que vous cherchiez une expérience de magasinage complète, Bill Market est l'endroit idéal.";
});


(function kiestaal() {
  if (localStorage.getItem("language") === "nederlands") {
    nederlands.click();
  } else if (localStorage.getItem("language") === "Français") {
    frans.click();
  }
  console.log('taal gekozen')
})();


