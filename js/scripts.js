function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("animal",ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("animal");
    ev.target.appendChild(document.getElementById(data));
}