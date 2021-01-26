const container = document.getElementById("container");
const panes = container.querySelectorAll(".pane");

container.addEventListener("click", (event) => {
  for (const pane of panes) {
    const button = pane.querySelector(".remove-button");
    if (event.target === button) {
      pane.style.display = "none";
    }
  }
});