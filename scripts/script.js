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

				const newClassList = ["menu-selector", "menu-" + index];
				mobileNavTopBar.classList.add(...newClassList);
			}
		});
		button.classList.add("menu-active");
	});
}
