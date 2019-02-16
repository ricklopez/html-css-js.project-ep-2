function updateUI(components, data){
   components.forEach(function(component, index){
       component(data[index]);
   });
}

function createVideoCard(data){
    debugger;
    var parentEl = document.querySelector("#" + data.targetId);
    var row = document.createElement("div");
    row.classList.add("row");


    data.forEach(function(item){
        var col = document.createElement("div");
        col.classList.add("col");
        var img = document.createElement("img");
        img.classList.add("video-img");
        var p = document.createElement("p");
        p.classList.add("video-name");
        var button = document.createElement("a");
        var buttonLabel = document.createTextNode("Watch");
        button.href = item.url;
        button.target = "_blank";
        button.appendChild(buttonLabel);
        var pText  = document.createTextNode(item.name);
        img.src = item.avatar;
        p.appendChild(pText);
        col.appendChild(img);
        col.appendChild(p);
        col.appendChild(button);
        row.appendChild(col);
    });

    parentEl.appendChild(row);
}

//div.row
////div.col
/////img.video-img
/////p.video-name