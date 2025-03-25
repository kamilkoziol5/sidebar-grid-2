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

const inputTask = document.getElementById("input-task-field");
const addBtn = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-container");

function AddTask() {
	if (inputTask.value.trim() === "") {
		alert("You must write something!");
		return;
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputTask.value;
		taskContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputTask.value = "";
	saveData();
}

addBtn.addEventListener("click", AddTask);
inputTask.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		AddTask();
	}
});

taskContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

function saveData() {
	localStorage.setItem("data", taskContainer.innerHTML);
}

function showTask() {
	taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();
