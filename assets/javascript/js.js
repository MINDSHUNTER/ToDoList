let inputBox = document.querySelector("#input-box")
let listContainer = document.querySelector("#list-ctn")
let messageContainer = document.querySelector("#message-ctn");

function addTask() {
    if (inputBox.value === '') {
        showMessage("You must enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

    }
}, false);

function showMessage(message) {
    let messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    setTimeout(function () {
        messageElement.remove();
    }, 2000);
}


