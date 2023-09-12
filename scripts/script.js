setTimeout(() => {
	const body = document.body;

	const navTarget = document.querySelector(
		"li#" + body.id.split("").slice(4).join("")
	);

	navTarget.classList.add("menu-active");
}, 100);
