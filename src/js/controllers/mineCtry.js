define(['app'],function(app){
	return app.controller('mineCtry',['$scope',function($scope){
			var num = 0;
		 	$scope.bol = false;
		 	$scope.showClick=function(){
		 		$scope.bol = true;
		 		num++;
		 	}
		 	$scope.hideClick = function(){
		 		$scope.bol = false;
		 	}
		 	$scope.classfn = function(){
		 		if(num==0){
		 			return "none";
		 		}else{
		 			return $scope.bol ? "mine-show" : "mine-hide"
		 		}
		 	}
	}])
})
