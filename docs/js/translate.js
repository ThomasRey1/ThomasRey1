let langData;

function ChangeLanguage(lang){
    const data = langData[lang];
    Object.keys(data).forEach(function (key){
        let element = document.getElementById(key);
        if (element) {
            element.textContent = data[key];
        }
    });
}

fetch("lang.json")
  .then(response => response.json())
  .then(data => {
    langData = data;
    ChangeLanguage("en");
  })
  .catch(error => {
    console.error("Une erreur s'est produite lors de la récupération des données JSON: ", error);
  });
