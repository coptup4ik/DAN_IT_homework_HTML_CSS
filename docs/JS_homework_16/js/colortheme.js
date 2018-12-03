let stylesheet = document.getElementById('stylesheet');
let changeColorBtn = document.getElementById('changeColor');
let themeName = 'darkTheme';


function checkLocalStorage() {
  if (localStorage.getItem(themeName) === null) {
    localStorage.setItem(themeName, "false");
  }
}

function setStylesheet() {
  JSON.parse(localStorage.getItem(themeName)) ? stylesheet.href = "./styles/darkTheme.css" : stylesheet.href = "./styles/style.css";
}

changeColorBtn.addEventListener('click', () => {
  if ( localStorage.getItem(themeName)  === 'false') {
    localStorage.setItem(themeName, "true")
  } else {
    localStorage.setItem(themeName, "false")
  }
  setStylesheet()
});

checkLocalStorage();
setStylesheet();