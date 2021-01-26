let tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.append(tooltip);
tooltip.hidden = true;
document.addEventListener("mouseover", (onEvent) => {
	if (onEvent.target.dataset.tooltip !== undefined) {
		tooltip.innerHTML = onEvent.target.dataset.tooltip;
		tooltip.hidden = false;
		let tooltipCords = {};
		tooltipCords.left =
			onEvent.target.getBoundingClientRect().left +
			onEvent.target.getBoundingClientRect().width -
			tooltip.getBoundingClientRect().width;
		if (
			onEvent.target.getBoundingClientRect().top <
			tooltip.getBoundingClientRect().height
		) {
			tooltipCords.top =
				onEvent.target.getBoundingClientRect().top +
				onEvent.target.getBoundingClientRect().height +
				5;
		} else {
			tooltipCords.top =
				onEvent.target.getBoundingClientRect().top -
				tooltip.getBoundingClientRect().height -
				5;
		}
		tooltip.style.top = tooltipCords.top + "px";
		tooltip.style.left = tooltipCords.left > 0 ? tooltipCords.left + "px" : 0;
	}
});
document.addEventListener("mouseout", (offEvent) => {
	if (offEvent.target.dataset.tooltip !== undefined) {
		tooltip.hidden = true;
	}
});