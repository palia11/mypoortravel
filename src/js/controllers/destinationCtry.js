define(['app'],function(app){
	return app.controller("destinationCtry",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
		$http.get(baseUrl+"all").then(function(data){
			$scope.desData = data.data.data;
		})
		$scope.cnname = "欧洲";//当前选中
		$scope.desClick = function(cnname){//点击改变当前选中
			$scope.cnname = cnname
		}
		$scope.desClass = function(cnname){//改变选中class
			return $scope.cnname == cnname?"desclick":""
		}
		$scope.desClass1 = function(cnname){//改变选中class
			return $scope.cnname == cnname?"tri_g":""
		}
	}])
})
