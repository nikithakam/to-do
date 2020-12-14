function newItem() {
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    
    // putting text in list item 
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);

    document.getElementById("input").value = "";
    li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
        console.log("enter clicked");
        newItem();
    }
}

function removeItem(e) {
    e.target.remove();
}

