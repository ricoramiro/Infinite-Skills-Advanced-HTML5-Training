function drag(e){
e.dataTransfer.setData("Text", e.target.id);
}
function allowDrop(e){
e.preventDefault();
}
function drop(e){
e.preventDefault();
dragItem = e.dataTransfer.getData("Text");
e.target.appendChild(document.getElementById(dragItem));
}