

const btn = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const status = document.getElementById("status");
const body = document.getElementById("body");

// btn.addEventListener("click", () => {
//     btn.innerHTML === "Turn On" ? btn.innerHTML = "Turn Off" : btn.innerHTML = "Turn On";
//     btn.innerHTML === "Turn On" ? bulb.classList.add("off") : bulb.classList.remove("off")
//     btn.innerHTML === "Turn On" ? status.innerHTML = "Status: Off" : status.innerHTML = "Status: On";
//     btn.innerHTML === "Turn On" ? body.className = "" : body.className = "dark-mode"
// })

let isOn = false;

btn.addEventListener("click", () => {
    isOn = !isOn;

    if (isOn) {
        bulb.classList.remove("off");
        btn.innerHTML = "Turn Off";
        status.innerHTML = "Status: On";
        body.classList.add("dark-mode")
    } else {
        bulb.classList.add("off");
        btn.innerHTML = "Turn On";
        status.innerHTML = "Status: Off";
        body.classList.remove("dark-mode")
    }
})

