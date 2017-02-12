define(['app'],function(app){
	return	app.controller("footer",["$scope",function($scope){
		var num = 1;
		$scope.footerckick = function(index){
			num = index;
		}
		$scope.footerclass = function(index){
			return num == index ? "a":""
		}
	}])
})
