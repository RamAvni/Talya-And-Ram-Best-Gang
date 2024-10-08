// Page Changing

for (let link of document.querySelectorAll(".link")) {
  link.addEventListener("click", showPage);
}

const container = document.getElementById("container");

function showPage() {
  const template = document.getElementById(this.getAttribute("data-section"));
  container.innerHTML = ``;
  container.appendChild(template.content);

  document.getElementById("defult").style.display = "none";
  document.getElementById("defult2").style.display = "none";

  // Give 'game-button' an event listener only AFTER it is rendered.
  if (template.id === "game")
    document
      .getElementById("game-button")
      .addEventListener("click", changeMolePlace);
}

// Game

function changeMolePlace() {
  const flexOptions = ["start", "center", "end"];
  console.log(this.parentElement.style);
  this.parentElement.style.justifyContent =
    flexOptions[Math.floor(Math.random() * 3)];
  this.parentElement.style.alignItems =
    flexOptions[Math.floor(Math.random() * 3)];
}
