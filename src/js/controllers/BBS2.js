define(['app'],function(app){
	return app.controller("BBS2Ctry",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
		$http.get(baseUrl+"bbsEnter").then(function(data){
			$scope.bbsEnter = data.data.data.forum_list;
			$scope.bbsEntername = data.data.data.forum_list[0].name
		})
		$scope.bbsEnterClick = function(name){
			$scope.bbsEntername = name
		}
		$scope.bbsEnternavClass = function(name){
			return $scope.bbsEntername == name?"navclick":""
		}
	}])
})
