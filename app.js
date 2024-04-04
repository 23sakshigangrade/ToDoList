document.addEventListener('DOMContentLoaded', function() {
    let inputs = document.getElementById("inp");
    let text = document.querySelector(".text");

    function Add() {
        if (inputs.value === "") {
            alert("Please enter a task");
        } else {
            let newEle = document.createElement("li");
            newEle.innerHTML = `${inputs.value} <i class="fa fa-trash" aria-hidden="true" onclick="deleteTask(this)"></i>`;
            text.appendChild(newEle);
            inputs.value = "";
        }

    }

    function deleteTask(icon) {
        // Get the parent <li> element
        let taskItem = icon.parentNode;
        // Remove the <li> element
        taskItem.remove();
    }

    // Expose the `Add` and `deleteTask` functions globally (optional)
    window.Add = Add;
    window.deleteTask = deleteTask;
});
