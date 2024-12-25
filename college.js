
//ONCLICK IN BARS & X MARK ------

let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


// COMPLAINT & FEEDBACK CODE --------------------

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})
//Selecting My CANCEL Button
var addbutton = document.getElementById("add-button")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
//MY ADD BUTTON SELECTING
var addbuttonn = document.querySelector(".add-button")
addbuttonn.addEventListener("click",function(event){
    event.preventDefault()
})


// Selecting Container,.add-button,report-input,faculty-input,feedback-input

var container = document.querySelector(".container")
var addbutton = document.querySelector(".add-button")
var reportinput = document.getElementById("report-input")
var facultyinput = document.getElementById("faculty-input")
var feedbackinput = document.getElementById("feedback-input")

addbutton.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","feedback-container")
    div.innerHTML=`<h2>${reportinput.value}</h2>
    <h3>${facultyinput.value}</h3>
    <p>${feedbackinput.value}</p>
    <button onclick="deletefeedb(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
  
})

 
function deletefeedb(event)
{
    event.target.parentElement.remove()
}




