var express = require('express');
var fs = require('fs');//加载框架
var app = express();
app.use(express.static('node'));////把相对于“我”的目录a作为我们的web服务目录目录与服务器同级目录
app.all('*',(req,res,next) =>{
	res.header("Access-Control-Allow-Origin","*");
    next();
})
//主页端口
app.get('/home',function(req,res){
    fs.readFile('node/1.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/all',function(req,res){
    fs.readFile('node/all.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/bbsEnter',function(req,res){
   fs.readFile('node/bbsEnter.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/bbsFind',function(req,res){
   fs.readFile('node/bbsFind.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.get('/bbsHot',function(req,res){
   fs.readFile('node/bbsHot.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.get('/bbsSearch',function(req,res){
   fs.readFile('node/bbsSearch.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.get('/bbsSelect',function(req,res){
   fs.readFile('node/bbsSelect.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.listen(4000,function(){
	console.log('服务已启动')
})