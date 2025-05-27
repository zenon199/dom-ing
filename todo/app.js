
let ctr = 1
function addTodo() {
    const val = document.querySelector("input").value
    const newVal = document.createElement("ol")
    newVal.setAttribute("id", ctr)
    newVal.innerHTML = `<span> ${val} </span>
        <button onClick="delTodo(${ctr})">Delete</buton>`
    document.querySelector("body").appendChild(newVal)
    ctr++
}

function delTodo(index) {
    const ele = document.getElementById(index)
    ele.parentNode.removeChild(ele)
}
