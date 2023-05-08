const container1 = document.querySelector("#container");
const button1 = document.querySelector("#button");

button1.addEventListener("click", function () {
  const newBox = document.createElement("DIV");
  newBox.classList.add("box");
  container1.appendChild(newBox);
});
