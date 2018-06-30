angular.module('video-player')
.component('videoList', {
  bindings: {
  	videos: '<',
  	onClick: '<'
  },
  controller: function() {

  },

  template: `
  <ul class="video-list" >
  <video-list-entry 

  video="data" 
  
  on-click="$ctrl.onClick"

  ng-repeat="data in $ctrl.videos">

  </video-list-entry>
  </ul>
`
});
