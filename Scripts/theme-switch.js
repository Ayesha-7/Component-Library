// const themeButton = document.querySelector("#theme-btn");

// themeButton.addEventListener("click", ()=>{
//   if(window.localStorage.getItem("theme"))
// })

// themeButton.addEventListener("click", () => {
//   if (window.localStorage.getItem("darkMode")) {
//     let darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
//     window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
//   } else {
//     window.localStorage.setItem("darkMode", true);
//   }
//   changeMode();
// });

// const changeMode = () => {
//   if (JSON.parse(localStorage.getItem("darkMode"))) {
//     document.documentElement.style.setProperty("--white", "#313335");
//     document.documentElement.style.setProperty("--black", "#FEFEFF");
//     modeBtn.childNodes[0].src = "/Assets/sun.png";
//   } else {
//     document.documentElement.style.setProperty("--white", "#FEFEFF");
//     document.documentElement.style.setProperty("--black", "#1A181B");
//     modeBtn.childNodes[0].src = "/Assets/moon.png";
//   }
// };
