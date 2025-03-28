document.addEventListener("DOMContentLoaded", () => {
	const inputTask = document.getElementById("input-task-field");
	const addButton = document.getElementById("add-task-btn");
	const taskContainer = document.getElementById("task-container");

	function addTask() {
		if (inputTask.value.trim() === "") {
			alert("You must write something");
			return;
		} else {
			let li = document.createElement("LI");
			li.innerHTML = inputTask.value;
			taskContainer.appendChild(li);
			let span = document.createElement("SPAN");
			span.innerHTML = "\u00d7";
			li.appendChild(span);
		}
		inputTask.value = "";
		saveData();
	}

	addButton.addEventListener("click", addTask);
	inputTask.addEventListener("keydown", function (e) {
		if (e.key === "Enter") {
			addTask();
		}
	});

	taskContainer.addEventListener("click", function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	});

	function saveData() {
		localStorage.setItem("data", taskContainer.innerHTML);
	}

	function showTask() {
		taskContainer.innerHTML = localStorage.getItem("data");
	}
	showTask();
});
