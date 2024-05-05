let select = document.getElementById("selectField");
let selectText = document.getElementById("select-Text");
let option = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowicon = document.getElementById("arrowicon");

select.addEventListener("click", ()=>{
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");
});

for(option of option){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
    }
}

