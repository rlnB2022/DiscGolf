const hamburgerButton = document.querySelector(".hamburger-container");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

const mobileNav = document.querySelector(".mobile-nav");

/**
 * 1. Set click handler for hamburger button
 * 2. Animate hamburger lines to show X or three lines (animated)
 * 3. Toggle menu
 */
hamburgerButton.addEventListener("click", () => {
	line1.classList.toggle("rotate-down");
	line2.classList.toggle("line-hidden");
	line3.classList.toggle("rotate-up");

	mobileNav.classList.toggle("active");
});
