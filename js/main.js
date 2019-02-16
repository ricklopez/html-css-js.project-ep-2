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

// Search
debugger;
var searchBtn = document.querySelector("#searchVideos");

searchBtn.addEventListener('input', function(e){
   console.log(e.target);
});
