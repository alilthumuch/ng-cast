angular.module('video-player')
.service('youTube', function($http){

 this.search = function(max, q, cb) {
 	$http.get( 'https://www.googleapis.com/youtube/v3/search', {
         params: {
           key: window.YOUTUBE_API_KEY,
           part: 'snippet', 
           type: 'video',
           q: q, 
           maxResults: max,
           videoEmbeddable: true,
         }
     }).then(function successCallback(response) {
     	console.log(cb)
     	cb(response.data.items)
     	console.log(response.data.items);
     },
     function errorCallback(response) {
     	console.log("error")
     });
 }

});
