// 1. Get some data from an API

var data = [];
var grid = document.querySelector('#gridMain');

fetch('http://5c5f1d0b3668970014fd1c04.mockapi.io/api/video')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        data = myJson;
        rivets.bind(grid, {videos: data});

        //TODO: Refactor: Move this to a search-service
        var searchBar = document.querySelector("#searchVideos");
        var videos = document.querySelectorAll(".video-card");
        var videoData = document.querySelectorAll(".video-name");
        var searchValue = null;

        searchBar.addEventListener('input', function(event){
            searchValue = event.target.value.toLowerCase();
            console.log(searchValue);

            //search through our videos
            debugger;
            for (var i = 0; i < videos.length; i++){
                if (!searchValue || videoData[i].textContent.toLowerCase().indexOf(searchValue) > -1){
                    videos[i].style["display"] = 'block';
                } else {
                    videos[i].style['display'] = 'none';
                }
            }
        });
    });







// searchBar.addEventListener('input', function(event){
//     console.log(event.target);
// });






