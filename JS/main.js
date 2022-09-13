let listLink = document.getElementById("other-link");
let magicClass = document.getElementsByClassName("magia-menu")[0];
let landingArea = document.getElementsByClassName("landing")[0];

listLink.addEventListener("click", () => {
  magicClass.classList.toggle("special-magia-menu");
});

landingArea.addEventListener("click", () => {
  if (magicClass.classList.contains("special-magia-menu")) {
    magicClass.classList.remove("special-magia-menu");
  }
});
