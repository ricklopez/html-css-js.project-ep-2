// 1. Get some data from an API

var data = [];

fetch('http://5c5f1d0b3668970014fd1c04.mockapi.io/api/video')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        data = myJson;
        updateUI('video-', data);
        console.log(data.length);
    });

// 2. Use that data on a web page

function updateUI(className, data){
    debugger;
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

