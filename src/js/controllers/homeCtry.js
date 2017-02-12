define(['app'],function(app){
	return app.controller("homeCtry",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
		$http.get(baseUrl+"home").then(function(data){
			$scope.homecity = data.data.data.feed.entry;
		})
	}])
})
