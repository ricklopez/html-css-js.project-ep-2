// 1. Get some data from an API

var data = [];
var init = false;

fetch('http://5c5f1d0b3668970014fd1c04.mockapi.io/api/video')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        data = myJson;
        data.targetId = "gridMain";
        updateUI([createVideoCard], [data]);
        console.log(data.length);
    });

// 2. Use that data on a web page

//createVideoCard(data, "gridMain");
