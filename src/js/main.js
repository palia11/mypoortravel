requirejs.config({
	baseUrl:'./js',
	paths:{
		"jquery": "libs/jquery",
	    "angular" : "libs/angular",
	    "angular-route" : "libs/angular-route",
	    "swiper":"libs/swiper.min",
	    'app':'module/app',
	    'constant':'constants/constant',
	    'filter':'filters/filter',
	    'footer':'controllers/footer',
	    'route':"routes/appRoute",
	    'homeLunbo':'controllers/homeLunbo',
	    'homeCtry':'controllers/homeCtry',
	    'destinationCtry':'controllers/destinationCtry',
	    'mallCtry':'controllers/mallCtry',
	    "BBSCtry":"controllers/BBS",
	    "BBS1Ctry":"controllers/BBS1",
	    "BBS2Ctry":"controllers/BBS2",
	    "BBS3Ctry":"controllers/BBS3",
	    'mineCtry':'controllers/mineCtry'
	},
	shim:{
		'angular':{
			exports:'angular'
		},
		"angular-route":{
			deps:['angular'],
			exports:'ngRoute'
		},
		"swiper":{
       		exports: 'swiper'
       }
	}
})
requirejs(["jquery","angular","angular-route",'app','constant','filter','footer','route','homeLunbo','homeCtry','destinationCtry','mallCtry',"BBSCtry","BBS1Ctry","BBS2Ctry","BBS3Ctry",'mineCtry'],function($,angular){
	$(document).ready(function () {
            angular.bootstrap(document,["app"]);
      })
})
