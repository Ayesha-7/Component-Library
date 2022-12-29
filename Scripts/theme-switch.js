const themeButton = document.querySelector("#theme-btn");

window.onload = () => {
  changeTheme();
};

themeButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (window.localStorage.getItem("darkMode")) {
    let darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
    window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  } else {
    window.localStorage.setItem("darkMode", true);
  }
  changeTheme();
});

const changeTheme = () => {
  if (JSON.parse(window.localStorage.getItem("darkMode"))) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const lightTheme = () => {
  document.documentElement.style.setProperty("--bg-primary", "#ffffff");
  document.documentElement.style.setProperty("--text-color-1", "#1f1f1f");
  document.documentElement.style.setProperty("--text-color-2", "#ffffff");
  themeButton.innerText = "🌜";
};

const darkTheme = () => {
  document.documentElement.style.setProperty("--bg-primary", "#1f1f1f");
  document.documentElement.style.setProperty("--text-color-1", "#ffffff");
  document.documentElement.style.setProperty("--text-color-2", "#1f1f1f");
  themeButton.innerText = "🌞";
};
