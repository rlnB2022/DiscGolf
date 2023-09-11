const mobileNavButtons = document.querySelectorAll(
	"nav.mobile-navbar > ul > li"
);

const mobileNavTopBar = document.querySelector(".menu-selector");

/**
 * Assign click event listener to each mobile menu item
 *
 */
for (const [index, button] of mobileNavButtons.entries()) {
	button.addEventListener("click", (e) => {
		mobileNavButtons.forEach((btn) => {
			/*  */
			if (btn !== button) {
				btn.classList.remove("menu-active");
				mobileNavTopBar.className = "";
				mobileNavTopBar.classList.add("menu-selector");
				mobileNavTopBar.classList.add("menu-" + index);
				// if (mobileNavTopBar.classList.add("menu-" + index)) {
				// }
			}
		});
		button.classList.add("menu-active");
	});
}
