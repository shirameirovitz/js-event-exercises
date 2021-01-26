var closebtns = document.querySelectorAll(".remove-button");
Array.from(closebtns).forEach(item => {
   item.addEventListener("click", () => {
      item.parentElement.style.display = "none";
   });
});