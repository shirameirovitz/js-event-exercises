let list = document.querySelector("ul");
let element = list.querySelectorAll("li");
list.addEventListener("click", (event) => {
	if (!(event.ctrlKey || event.metaKey)) {
		event.target.className = "selected";
		for (let item of element) {
			item.className = "";
		}
	}
	event.target.className = "selected";
});

