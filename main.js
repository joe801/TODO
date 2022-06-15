
// creating variables of  add button, todo input and todo list
let addButton = document.getElementById("add-button");
let todoInput = document.getElementById("input-text");
let todoList = document.getElementById("lists");

// Creating variables for commands buttons
let mobile_condition = document.getElementById("mobile-condition");
let completed_btn = document.querySelector(".completed");
let all_btn = document.querySelector(".all");
let active_btn = document.querySelector(".active");
let clear_btn = document.querySelector(".clear");
// creating variables for mobile_view condition buttons
let m_completed_btn = document.getElementById("complete");
let m_all_btn = document.getElementById("all_");
let m_active_btn = document.getElementById("active_");

function list_count(){
	let list = todoList.children.length;
	let counts = eval(7 - list);
	document.getElementById("countdown").innerHTML = counts;
}

// wirting an onclick function for the add todo button
addButton.addEventListener('click', function() {

	// condition for if no task is entered and the add button is pressed 
	const task = todoInput.value;
	if (!task) {
		alert("Please Enter a Task");
		return;
	} else{
			// creating a div to add the "list" class styling from css
			const task_list = document.createElement("div");
			task_list.classList.add("list");

			// creating a div to add the "check" styling and append to the task div
			const task_check = document.createElement("div");
			task_check.classList.add("check");

			task_list.appendChild(task_check);

			//creating an input element to add the "disp" class styling from css
			const task_list_disp = document.createElement("input");
			task_list_disp.classList.add("disp");
			task_list_disp.type = "text";
			task_list_disp.value = task;
			task_list_disp.setAttribute("readonly", "readonly");

			//apending the task input to the task div
			task_list.appendChild(task_list_disp);

			// creating a div to add the "delete" styling and append to the task div
			const task_delete = document.createElement("div");
			task_delete.classList.add("delete");

			task_list.appendChild(task_delete);

			//appending the task div to the container div (final appending)
			todoList.appendChild(task_list);

			//creating an image variable for check button
			var img_check = document.createElement("img");
			img_check.src = 'images/icon-check.svg';

			// adding a listener for the checked button
			task_check.addEventListener('click', function(){
				task_check.appendChild(img_check);
				task_check.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
				task_list_disp.style.textDecoration = "line-through";
				task_list_disp.style.color = "var(--lists_border_line)"
			});

			// creating a click function for the delete button
			task_delete.addEventListener('click', function(){
				todoList.removeChild(task_list);
				//  calling list count function to adjust count
				list_count();
			});

			// creating condition to show completed task when completed btn is clicked
			completed_btn.addEventListener('click', function(){
				if (task_list_disp.style.textDecoration != "line-through") {
					task_list.style.display = "none";
				} else{
					task_list.style.display = "flex";
				}
			});

			// creating condition to show active task when active btn is clicked
			active_btn.addEventListener('click', function(){
				if (task_list_disp.style.textDecoration == "line-through") {
					task_list.style.display = "none";
				} else{
					task_list.style.display = "flex";
				}
			});

			// creating condition to show all task when all button is clicked
			all_btn.addEventListener('click', function(){
				task_list.style.display = "flex";
			});
			

			// adding a listener to clear button to clear all completed task
			clear_btn.addEventListener('click', function(){
				if (task_list_disp.style.textDecoration == "line-through") {
					todoList.removeChild(task_list);
					// calling count fubction to re_evaluate the list count
					list_count();
				}
			});

			// creating mobile_view condition to show completed task when completed btn is clicked
			m_completed_btn.addEventListener('click', function(){
				if (task_list_disp.style.textDecoration != "line-through") {
					task_list.style.display = "none";
				} else{
					task_list.style.display = "flex";
				}
			});

			// creating mobile_view condition to show active task when active btn is clicked
			m_active_btn.addEventListener('click', function(){
				if (task_list_disp.style.textDecoration == "line-through") {
					task_list.style.display = "none";
				} else{
					task_list.style.display = "flex";
				}
			});

			// creating mobile_view condition to show all task when all button is clicked
			m_all_btn.addEventListener('click', function(){
				task_list.style.display = "flex";
			});

			// setting counts for number of todo list
			let list = todoList.children.length;
			let counts = eval(7 - list);
			// setting display for counts
			document.getElementById("countdown").innerHTML = counts;

			// Stopping appending and setting counts when list is full
			if (list == 8){
				alert("You've reached todo limit");
				addButton.onclick  = null;
				todoList.removeChild(task_list);
				document.getElementById("countdown").innerHTML = 0;
			}
	}
});

// Dark & Light theme class toggling codes
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
sun.onclick = function () {
	document.body.classList.add("light-theme");
	document.body.classList.remove("body");
	if (document.body.classList.contains("light-theme")) {
		sun.style.display = "none";
		moon.style.display = "inline-block";
		document.getElementById("background").style.backgroundImage = "url('images/bg-desktop-light.jpg')";
	}
}

moon.onclick = function () {
	document.body.classList.add("body");
	document.body.classList.remove("light-theme");
	if (document.body.classList.contains("body")) {
		sun.style.display = "inline-block";
		moon.style.display = "none";
		document.getElementById("background").style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
	}
}

$("#lists").sortable();