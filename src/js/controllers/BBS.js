define(['app'],function(app){
	return app.controller("BBSCtry",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
		var arr = ['热议','进入面板','找旅伴']
		$scope.swiper = new Swiper('.swiper-scend', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	         paginationBulletRender: function (swiper, index, className) {
	            return '<span class="' + className + '">' + arr[index] + '</span>';
	        },
	        observer:true
	    })
		$http.get(baseUrl + "bbsSearch")
	      .then(function(data){
	        	$scope.seaData = data.data.data;
	      },function(error){
	        console.log(error)
	    });
	     $scope.boll = true;
	     $scope.appearClick = function(){
	     	console.log(1)
	    	$scope.boll = false;
	    }
	    $scope.backClick = function(){
	    	$scope.boll = true;
	    }
	    $scope.back = function(){
	    	return $scope.boll ? "" : "searchback";
	    }
	}])
})
