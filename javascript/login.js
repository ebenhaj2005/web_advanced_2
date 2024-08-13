

const kiestaalNL = "nederlands";
const kiestaalFR = "Français";





const Naam = document.getElementById("Naam-input");
const Leeftijd = document.getElementById("leeftijd-input");
const form = document.getElementById("form");
const error = document.getElementById("error");
const User = document.getElementById("userInfo");


form.addEventListener("submit", (e) => {
  const msg = ["Gelieve een geldige leeftijd in te vullen", "Gelieve uw leeftijd in te vullen om op de website van Bill Market te komen", "Gelieve uw naam in te vullen om op de website van Bill Market te komen"];
  const[a,b,c] = msg; // Destructuring
  let message = [];
  const username = {name: Naam.value};
  const userage= {Age: Leeftijd.value};
  const userInfo = {...username, ...userage};
  e.preventDefault();
  let naam2 = Naam.value;
  if (naam2 === "" || naam2 === null) {
    message.push(
      c
    );
  }
  if (Leeftijd.value.length > 2 && Leeftijd.value.length != 0) {
    message.push(a);
  }
  if (Leeftijd.value === "" || Leeftijd.value === null) {
    message.push(
     b
    );
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerText =  message.join(` , ${"\n"}`);
  } else {

alert(`Welkom ${userInfo.name}! U bent ${userInfo.Age} jaar oud. U wordt doorgestuurd naar de website van Bill Market.`);
    window.location.href = "../html/Main.html";
    
  }
});

