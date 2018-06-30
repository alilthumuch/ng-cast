angular.module('video-player')

.component('app', {
  bindings: {
  	
  },

  controller: function(youTube) {
  	this.videos = window.exampleVideoData;
  	this.currentVideo = window.exampleVideoData[0];
  	
  	this.searchResults = (val) => {
    	this.videos = val
    	this.currentVideo = this.videos[0];
  	};

  	this.selectVideo = (video) => {
  		this.currentVideo = video;
  	};

  	youTube.search(5, '', this.searchResults);
  },

  template: `
  <div id="app container">
  <nav class="navbar">
    <div class="col-md-6 col-md-offset-3">
      <search 
      results = "$ctrl.searchResults"
      ></search>
    </div>
  </nav>
  <div class="row">
    <div class="col-md-7">
      <video-player video1='$ctrl.currentVideo'></video-player>
    </div>
    <div class="col-md-5">
      <video-list 
      videos='$ctrl.videos'
      on-click="$ctrl.selectVideo"><h5></video-list>
    </div>
  <div>
</div>
`
});
