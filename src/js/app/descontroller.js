app.constant("dataUrl","http://localhost:4000/")
	.controller('desCtrl',['$scope','$http','dataUrl',function($scope,$http,dataUrl){
//		$scope.desClick = function(data){
			$http.get(dataUrl + "all")
	      .then((data) => {
	        	$scope.desData = data.data.data
	        	console.log($scope.desData)
	        	console.log($scope.desData[0].cnname)
	      },(error) =>{
	        console.log(error)
	    });
//		}
		
	}])
