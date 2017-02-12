define(['app'],function(app){
	return app.filter("destinFilter",function(){
		return function(data,cnname,type,name){
			if(angular.isArray(data)&&angular.isString(cnname)){
				for(var i = 0;i < data.length;i++){
					if(data[i][name] == cnname){
						return data[i][type]
					}
				}
			}else{
				return data;
			}
		}
	})
})
