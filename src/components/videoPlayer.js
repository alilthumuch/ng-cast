angular.module('video-player')

.component('videoPlayer', {
  bindings: {
  	video1: '<'
  },

  controller: function($scope) {
  	
  },

  template:
  `<div class="video-player">
  <div class="embed-responsive embed-responsive-16by9">
  <p ng-if ="!$ctrl.video1">Please wait</p>
    <iframe class="embed-responsive-item" ng-if="!!$ctrl.video1" ng-src="{{'https://www.youtube.com/embed/'+ $ctrl.video1.id.videoId}}" allowFullScreen></iframe>
  </div>
  <div class="video-player-details">
    <h3>{{$ctrl.video1.snippet.title}}</h3>
    <div>{{$ctrl.video1.snippet.description}}</div>
  </div>
  </div>`
});
