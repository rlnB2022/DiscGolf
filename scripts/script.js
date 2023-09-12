const mobileNavButtons = document.querySelectorAll(
	"nav.mobile-navbar > ul > li"
);

const mobileNavTopBar = document.querySelector(".menu-selector");

/**
 * Assign click event listener to each mobile menu item
 * Add classes to Top Nav Bar to animate position relative
 * to nav button clicked
 *
 */
for (const [index, button] of mobileNavButtons.entries()) {
	button.addEventListener("click", (e) => {
		mobileNavButtons.forEach((btn) => {
			/*  */
			if (btn !== button) {
				btn.classList.remove("menu-active");
				// reset class list
				mobileNavTopBar.className = "";

				// add all appropriate classes for Nav Top Bar
				const newClassList = ["menu-selector", "menu-" + index];
				mobileNavTopBar.classList.add(...newClassList);
			}
		});
		button.classList.add("menu-active");

		// show the correct web page
		switch (index) {
			case 0:
				loadHome("index.html");
				return;
			case 1:
				loadHome("shop.html");
				return;
			case 2:
				loadHome("contact.html");
				return;
			case 3:
				loadHome("cart.html");
				return;
			default:
				return;
		}
	});
}

/**
 * @param {String} url - html address
 * @return {String} HTML string fragment
 */
const fetchHtmlAsText = async (url) => {
	const response = await fetch(url);
	const text = await response.text();
	return text;
};

const loadHome = async (url) => {
	const contentDiv = document.querySelector("header");
	contentDiv.innerHTML = await fetchHtmlAsText(url);
};
