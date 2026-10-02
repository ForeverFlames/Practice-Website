document.addEventListener("click", function (event) {
    const inputElement = document.querySelector("input");
    if (inputElement && inputElement.value.trim() !== "") {
        document.title = inputElement.value;
    }
});

function incrementLocal() {
    let currentCount = parseInt(localStorage.getItem("counter_ls") || "0");
    currentCount++;
    localStorage.setItem("counter_ls", currentCount);
    document.getElementById("btn-local").textContent = currentCount;
}

function incrementSession() {
    let currentCount = parseInt(sessionStorage.getItem("counter_ss") || "0");
    currentCount++;
    sessionStorage.setItem("counter_ss", currentCount);
    document.getElementById("btn-session").textContent = currentCount;
}

function loading() {
    let ls = localStorage.getItem("counter_ls") || "0";
    let ss = sessionStorage.getItem("counter_ss") || "0";

    document.getElementById("btn-local").textContent = ls;
    document.getElementById("btn-session").textContent = ss;
}