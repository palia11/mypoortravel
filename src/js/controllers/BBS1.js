define(['app'],function(app){
	return app.controller('BBS1Ctry',['$scope','baseUrl','$http',function($scope,baseUrl,$http){
		 	//获取热议数据
		 	$http.get(baseUrl + "bbsHot")
				.then(function(data){
					$scope.addproducts = data.data.data;
//					 console.log($scope.addproducts)
				},function(error){
					$scope.error = error;
		})
	}])
})
