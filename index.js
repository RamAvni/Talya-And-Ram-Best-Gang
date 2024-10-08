
// Page Changing

for (let link of document.querySelectorAll(".link")) {
  link.addEventListener("click", showPage);
}

const container = document.getElementById("container");

function showPage() {
  const template = document.getElementById(this.getAttribute("data-section"));
  container.innerHTML= ``
  container.appendChild(template.content);
}



// Game

document.getElementById("game-mole").addEventListener("click", changeMolePlace)

function changeMolePlace(){
    this.
}
