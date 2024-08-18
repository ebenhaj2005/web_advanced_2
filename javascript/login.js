let Naam = document.getElementById("Naam-input");
let Leeftijd = document.getElementById("leeftijd-input");
let form = document.getElementById("form");
let error = document.getElementById("error");
let User = document.getElementById("userInfo");

function welkom(){
  alert("Welkom op de website van Bill Market");
}
window.addEventListener("load", welkom);
form.addEventListener("submit", (e) => {
  const msg = ["Gelieve een geldige leeftijd in te vullen", "Gelieve uw leeftijd in te vullen om op de website van Bill Market te komen", "Gelieve uw naam in te vullen om op de website van Bill Market te komen"];
  const[a,b,c] = msg; 
  let message = [];
  let username = {name: Naam.value};
  let userage= {Age: Leeftijd.value};
  let userInfo = {...username, ...userage};
  e.preventDefault();
  let naam2 = Naam.value;
  if (naam2 === "" || naam2 === null) {
    message.push(
      c
    );
  }
  if (Leeftijd.value > 100 && Leeftijd.value.length != 0) {
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
    let aanspreking = ["Mnr.", "Mevr."];
function hello(...aanspreking){
  alert(`Welkom ${aanspreking.join(', ')}  ${userInfo.name}! U bent ${userInfo.Age} jaar oud. U wordt doorgestuurd naar de website van Bill Market.`);
}
hello(...aanspreking);

    window.location.href = "../html/Main.html";
    
  }
});

