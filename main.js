document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toogleBtn = document.getElementById("toogler-btn");

	toogleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toogleBtn.classList.toggle("rotate");
	});
});
