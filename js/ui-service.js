function updateUI(className, data){
    // grab all img
    var imgs = Array.from(document.getElementsByClassName(className + 'img'));
    // change the img
    imgs.forEach(function(item, index){
        item.src = data[index].avatar;
    });

    // grab all name
    var names = Array.from(document.getElementsByClassName(className + 'name'));
    // change the name
    // imgs.forEach(function(item, index){
    //     item.src = data[index].avatar;
    // });
}

function createVideoCard(data, targetId){
    debugger;
    var parentEl = document.querySelector("#" + targetId);
    var row = document.createElement("div");
    // var col = document.createElement("div");
    // var img = document.createElement("img");
    // var p = document.createElement("p");

    // var pText  = document.createTextNode("This is a text node");
    // img.src = "//via.placeholder.com/150";

    // p.appendChild(pText);

    [1,2,3,4].forEach(function(item){
        var col = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("p");
        var pText  = document.createTextNode("This is a text node");
        img.src = "//via.placeholder.com/150";
        p.appendChild(pText);


        col.appendChild(img);
        col.appendChild(p);

        row.appendChild(col);
    });
    // col.appendChild(img);
    // col.appendChild(p);
    //row.appendChild(col);

    parentEl.appendChild(row);
}

//div.row
////div.col
/////img.video-img
/////p.video-name