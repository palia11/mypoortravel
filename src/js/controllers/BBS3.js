define(['app'],function(app){
	return app.controller("BBS3Ctry",['$scope','baseUrl','$http',function($scope,baseUrl,$http){
			$http.get(baseUrl + "bbsSelect")
	      .then(function(data){
	        	$scope.selData = data.data.data.times_range;
	        	$scope.selData1 = data.data.data.destination;
	      },function(error){
	        console.log(error)
	    });
	    $http.get(baseUrl + "bbsFind")
				.then(function(data){
					$scope.add2products = data.data.data;
				},function(error){
					$scope.error = error;
		})
	    //出发时间
	    $scope.goTime = '不限';
	    $scope.timebol = true; //出发时间的ul隐藏
	    $scope.bol=true; //目的地的ul隐藏
	    //出发时间的ul-li的点击事件
	    $scope.timeClick = function(time){
	    	$scope.goTime = time; //把点击的li的时间绑定到p的时间
	    	$scope.timebol = true; //绑定后出发时间的ul隐藏
	    }
	    //时间p的点击事件，判断是否隐藏
	    $scope.timebolClick = function(){
	    	$scope.timebol = ($scope.timebol == false?true:false); //点击之后，隐藏则显示，否则反之；
	    	$scope.bol=true; //使目的地的ul隐藏
	    }
	    //给出发时间的ul-li点击添加样式
	    $scope.bbsClass = function(time){
	    	return $scope.goTime == time ? "bbsliclick" : ""; //绑定成功ul-li的颜色变绿
	    }
	    //目的地
	   
	    $scope.conName = "热门";  //默认
	    //目的地左边ul-li的点击事件
	    
	    $scope.conClick = function(name){//点击更改要过滤的对象
	    	$scope.conName = name;
	    }
	    //给左边的li修改样式
	    $scope.conClass = function(name){
	    	return $scope.conName == name?"sel_li_bg":"";
	    }
	    //目的地显示隐藏事件
	    $scope.bolClick = function(){
	    	 $scope.bol=false==$scope.bol?true:false;//显示时点击使其true隐藏
	    	 $scope.timebol = true;//使时间的ul隐藏
	    }
	    //目的地p的地点与li中的地点绑定
	    $scope.placeName = '不限';
	    $scope.placeClick = function(name){
	    	$scope.placeName = name;//目的地p的地点与li中的地点进行绑定
	    	$scope.bol=true;//绑定成功后隐藏li
	    }
	    //右边地区的颜色样式
	    $scope.areaClass = function(name){
	    	return $scope.placeName == name?"sel_li_bg":""; //地点相符后使li的地点颜色变绿
	    }
	    //出发时间，目的地的背景样式
	    $scope.ppClass = function(){
	    	if($scope.timebol&&$scope.bol){//当出发时间的ul和目的地的ul都隐藏的时候背景色为白色
	    		return ''
	    	}else{
	    		return "sel_pp"//为灰色
	    	}
	    }
	    ////出发时间，目的地的字体样式
	     $scope.ppfontClass = function(num){
	     	//参数num来判断给出发时间(num=0)还是目的地(num=1)添加样式
	     		if(!$scope.timebol){//出发时间的ul-li如果显示
	     				return num==0?'sel_ppfont':'';//判断参数是否为0，为0则给出发时间p添加字体样式
	     		}else if(!$scope.bol){//目的地ul-li如果显示
	     			return num==1?'sel_ppfont':'';//判断参数是否为1，为1则给目的地p添加样式
	     		}else{
	     			return ''
	     		}
	    }
		}])
})
