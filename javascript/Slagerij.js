let nederlands = document.getElementById("Nederlands");
let frans = document.getElementById("Frans");

let text2 = document.getElementById("text-slagerij");
let slagerijheader = document.getElementById("Slagerijnaam");
let onsheader = document.getElementById("Onsnaam");

nederlands.addEventListener("click", function () {
  slagerijheader.innerHTML = "Slagerij";
  onsheader.innerHTML = "Over ons";
  localStorage.setItem("language", "nederlands");
  text2.innerHTML =
    "🥩🎉GROOT NIEUWS🥩🎉 Met veel genoegen kondigen wij de opening aan van onze slagerij “Chez Bouzz” in de supermarkt “Bill Market” op donderdag 14/03 ! 🛒Om deze opening te vieren hebben wij speciale aanbiedingen op een selectie van onze kwaliteitsvleessoorten. Mis de kans niet om uzelf te trakteren tegen onweerstaanbare prijzen!👉 Bezoek “Bill Market” om ons ruim assortiment verse producten te ontdekken en te genieten van onze exclusieve promoties! Vertel het verder en kom dit heerlijke moment met ons delen!🛒🎉";
});

frans.addEventListener("click", function () {
  localStorage.setItem("language", "Français");
  text2.innerHTML =
    "🥩🎉GRANDE NOUVELLE🥩🎉 Nous avons le plaisir de vous annoncer l'ouverture de notre boucherie “Chez Bouzz” dans le supermarché “Bill Market” le jeudi 14/03 ! 🛒Pour célébrer cette ouverture, nous avons des offres spéciales sur une sélection de nos viandes de qualité. Ne manquez pas l'occasion de vous faire plaisir à des prix irrésistibles!👉 Rendez-vous chez “Bill Market” pour découvrir notre large gamme de produits frais et profiter de nos promotions exclusives! Faites passer le mot et venez partager ce délicieux moment avec nous!🛒🎉";
  slagerijheader.innerHTML = "Boucherie";
  onsheader.innerHTML = "A propos de nous";
});

const kiestaalNL = "nederlands";
const kiestaalFR = "Français";
(function kiestaal() {
  if (localStorage.getItem("language") === "nederlands") {
    nederlands.click();
  } else if (localStorage.getItem("language") === "Français") {
    frans.click();
  }
  console.log("taal gekozen");
})();

let vlees = document.querySelector("#vlees");

fetch("../javascript/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(post => {
     vlees.insertAdjacentHTML("beforeend", `<li class='product'><img class='pictureprod' src='${post.image}' width='400px'> <br> <br>
 ${post.prijs} €/Kg  <br>  
     </li>`);

      
    });;
  });


