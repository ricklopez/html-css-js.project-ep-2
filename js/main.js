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



//var searchUsers = document.querySelector('#search-videos');
        var videos = document.querySelectorAll('.video-card');
        var videoData = document.querySelectorAll('.video-name');
        var searchValue = null;
        
        searchBtn.addEventListener('keydown', function() {
            searchValue = this.value.toLowerCase();
            console.log(searchValue);
            for (var i = 0; i < videos.length; i++) {
                if (!searchValue || videoData[i].textContent.toLowerCase().indexOf(searchValue) > -1) {
                    videos[i].style['display'] = 'block';
                } else {
                    videos[i].style['display'] = 'none';
                }
            }
        });
    });

// Search
debugger;
var searchBtn = document.querySelector("#searchVideos");

// searchBtn.addEventListener('input', function(e){
//    console.log(e.target);
// });

