let button= document.getElementById("enter")
let input= document.getElementById("userinput");
let ul= document.querySelector("ul")
let li=document.getElementsByTagName("li")
let deleteBtns= document.getElementsByClassName("delete")



function lengthInput(){
    return input.value.length;
}

function addListElement(){
    //punt 3
    let btn= document.createElement("button")
    btn.innerHTML="Delete";
    btn.onclick= removeParent;

    let li= document.createElement("li"); 
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    li.appendChild(btn)
    input.value="";
}

function addListAfterClick(){
    if(lengthInput()>0){
        addListElement();
    }
}

function addListAfterEnter(){
    if(input.value.length>0 && event.which===13){
        addListElement()
   }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter)


ul.onclick=function(event){
	let touch=event.target;
	touch.classList.toggle("done");
}


for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}



function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}


