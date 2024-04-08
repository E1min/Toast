let message = document.getElementById("textarea")
let succeselem = document.getElementById("succes")
let errorelem = document.getElementById("error")
let sendbtn = document.querySelector("button")
let display = document.querySelector(".display")
let clearbtn = document.querySelector("button:last-child")
let notf = document.querySelector("h5")
let cancelelem = document.getElementById("iscancel")
let nocancelelem = document.getElementById("nocancel")
let durationelem = document.getElementById("duration")


sendbtn.addEventListener("click", () => {

    if (message.value.trim() === "") {
        notf.innerHTML = "Please enter message!"
    }
    else if (succeselem.checked) {
        let divelem = document.createElement("div");
        divelem.textContent = message.value
        let deletebtn = document.createElement("button");
        deletebtn.textContent = "x"
        deletebtn.style.backgroundColor = "transparent"
        deletebtn.style.border = "none"
        deletebtn.style.fontSize = "16px"
        display.appendChild(divelem)
        if (cancelelem.checked) {
            divelem.appendChild(deletebtn)
        }
        else if (nocancelelem.checked) {
            setTimeout(() => {
                divelem.remove()
            }, durationelem.value*1000);
        }
        divelem.className = "succes"
        deletebtn.addEventListener("click", () => {
            divelem.remove()
        })
        notf.innerHTML = ""
        message.value = ""
    }
    else if (errorelem.checked) {
        let divelem = document.createElement("div");
        divelem.textContent = message.value
        let deletebtn = document.createElement("button");
        deletebtn.textContent = "x"
        deletebtn.style.backgroundColor = "transparent"
        deletebtn.style.border = "none"
        deletebtn.style.fontSize = "16px"
        display.appendChild(divelem);
        if (cancelelem.checked) {
            divelem.appendChild(deletebtn)
        }
        else if (nocancelelem.checked) {
            setTimeout(() => {
                divelem.remove()
            }, durationelem.value*1000);
        }
        divelem.className = "error"
        deletebtn.addEventListener("click", () => {
            divelem.remove()
        })
        notf.innerHTML = ""
        message.value = ""

    }
})

clearbtn.addEventListener("click", () => {
    display.innerHTML = ""
})

let indicator=document.querySelector(".indicator")

indicator.addEventListener("click",()=>{
    indicator.classList.toggle("active")
    document.body.classList.toggle("dark")
})