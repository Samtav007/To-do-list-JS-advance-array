let input = document.getElementById('input')
let btn = document.getElementById('button')
let todolist = document.getElementById('todolist')

let storage = []
btn.onclick = click



function click() {
    storage.push(input.value)
    input.value = "";
    todo()
}

function todo() {
    todolist.innerHTML = ''
    storage.forEach(function (todo, index) {
        todolist.innerHTML +=
            `<li>
        ${todo}
        <a onclick=deletehandle(${index})>, delete</a>
        <a onclick=edithandle(${index})> Edit </a>         
    </li>`
    })

}
console.log(storage)

function edithandle(index) {
    let newvalue = prompt('enter value')
    if (newvalue.length > 0)
        storage.splice(index, 1, newvalue)
    todo()
}
function deletehandle(index) {
    storage.splice(index, 1)
    todo()
}