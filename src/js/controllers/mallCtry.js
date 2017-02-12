define(['app'],function(app){
	return app.controller('mallCtrl',['$scope',function($scope,dataUrl){
		var arr = [];
		for(var i = 0;i < 10;i++){
			arr.push({'img':'../images/jijiutaocan.jpg',
		'word':'机票套餐'});
		}
		$scope.mallData = arr;
	}])
})
