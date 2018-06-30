angular.module('video-player')

.component('search', {
  bindings: { 
  	results: '<'
  },

  controller: ['youTube', function(youTube) {
  	this.val = '',
  	this.result = () => {
  		youTube.search(5, this.val, this.results)
  	}

  }],

  template: `
  <div class="search-bar form-inline">
  <input class="form-control" type="text" ng-model = "$ctrl.val"/>
  <button class="btn"  ng-click="$ctrl.result()">
    <span class="glyphicon glyphicon-search"></span>
  </button>
  </div>
  `
});
