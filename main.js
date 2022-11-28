let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let span = document.querySelector("span");

// for (let i = 0; i < span.length; i++) {
//     span[i].addEventListener("click",function(){
//         span[i].parentElement.remove();
//     })
// }


button.addEventListener("click",add)

function add(){
    if(!input.value.length){
        alert("Write something")
    }
    else{
    let newElement = document.createElement("li");
    newElement.innerHTML = `${input.value} <span onclick="this.parentElement.remove()">Delete</span>`;
    ul.appendChild(newElement);
    input.value = "";
     }
}

document.querySelector("#allDelete").addEventListener("click",deleteAll);

function deleteAll() {
    // let ul = doxument.querySelector("ul");
    // ul.innerHTML = "";

    //2-nd 
    while(ul.firstChild) {
        ul.removeChild(ul.lastChild)
    }
}

