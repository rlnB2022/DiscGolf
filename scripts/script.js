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
	});
}
