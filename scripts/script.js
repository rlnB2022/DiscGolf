const mobileNavButtons = document.querySelectorAll(
	"nav.mobile-navbar > ul > li"
);

/**
 * Assign click event listener to each mobile menu item
 *
 */
for (const button of mobileNavButtons) {
	button.addEventListener("click", () => {
		mobileNavButtons.forEach((btn) => {
			/*  */
			if (btn !== button) {
				btn.classList.remove("menu-active");
			}
		});
		button.classList.add("menu-active");
	});
}
