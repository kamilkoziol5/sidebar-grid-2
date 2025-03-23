document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toogleBtn = document.getElementById("toogler-btn");
	const hamburgerBtn = document.querySelector(".hamburger");
	const menuIcon = document.getElementById("menuIcon"); 

	toogleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toogleBtn.classList.toggle("rotate");
	});

	hamburgerBtn.addEventListener("click", () => {
		sidebar.classList.toggle("collapsed");

		
		if (menuIcon.classList.contains("bx-menu")) {
			menuIcon.classList.remove("bx-menu");
			menuIcon.classList.add("bx-x");
		} else {
			menuIcon.classList.remove("bx-x");
			menuIcon.classList.add("bx-menu");
		}
	});
});
