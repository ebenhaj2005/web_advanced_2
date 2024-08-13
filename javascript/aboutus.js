let nederlands = document.getElementById("Nederlands");
let frans = document.getElementById("Frans");
let text = document.getElementById("text-maps");
let slagerijheader = document.getElementById("Slagerijnaam");
let onsheader = document.getElementById("Onsnaam");
let titeltabel = document.getElementById("titeltabel");

nederlands.addEventListener("click", function () {
  slagerijheader.innerHTML = "Slagerij";
  onsheader.innerHTML = "Over ons";
  titeltabel.innerHTML = "Openingsuren";
  localStorage.setItem("language", "nederlands");
  document.getElementById('grapbutton').innerText = "Druk hier voor een grap"
});

frans.addEventListener("click", function () {
  slagerijheader.innerHTML = "Boucherie";
  onsheader.innerHTML = "A propos de nous";
  titeltabel.innerHTML = "Heures d'ouverture";
  localStorage.setItem("language", "Français");
  document.getElementById('grapbutton').innerText = "Appuyez ici pour une blague"
});

(function kiestaal() {
  if (localStorage.getItem("language") === "nederlands") {
    nederlands.click();
  } else if (localStorage.getItem("language") === "Français") {
    frans.click();
  }
  console.log('taal gekozen')
})();



function fetchopeningsuren() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const openingsuren = [
        {
          dag: "Maandag",
          Uur: "9:00 - 20:00",
        },
        { dag: "Dinsdag", Uur: "9:00 - 20:00" },
        { dag: "Woensdag", Uur: "Gesloten" },
        { dag: "Donderdag", Uur: "9:00 - 20:00" },
        { dag: "Vrijdag", Uur: "9:00 - 20:00" },
        { dag: "Zaterdag", Uur: "9:00 - 20:00" },
        { dag: "Zondag", Uur: "9:00 - 20:00" },
      ];
      resolve(openingsuren);
    }, 0)
  );
}

function toonuren(openingsuren) {
  let body = document.getElementById("openingsuren2");

  openingsuren.forEach((item) => {
    const rij = document.createElement("tr");
    const dagen = document.createElement("th");
    dagen.textContent = item.dag;
    const uurcel = document.createElement("td");
    uurcel.textContent = item.Uur;
    rij.appendChild(dagen);
    rij.appendChild(uurcel);

    body.appendChild(rij);
  });
}
fetchopeningsuren()
  .then((openingsuren) => {
    toonuren(openingsuren);
  })
  .catch((error) => {
    console.error("Failed to fetch opening hours:", error);
  });

let infoknop = document.getElementById("infoknop");

infoknop.addEventListener("click", async function () {
  const url = 'https://jokes-always.p.rapidapi.com/common';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '017e280fa1msh90ff52309b23231p1db9d5jsnf7f94ec5486f',
      'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    document.getElementById('joke').innerText = result.slice(9,-3)
  } catch (error) {
    console.error(error);
  }
});


