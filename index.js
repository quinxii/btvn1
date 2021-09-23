/*
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())
*/

/*
var cookieParser = require('cookie-parser');
app.use(cookieParser())
*/

/*var express = require('express');//giống khai báo thư viện include trong c++
var app = express();//khai báo biến như ở đây là biến app

app.set('view engine', 'pug');
app.set('views','./views');


//localhost:3000 => Hello World!
app.get('/',function(req,res){// dấu '/' là bắt buộc
    res.send("Hello World!");//res với req giống như 2 struct 
});//send giống cout

//localhost:3000/home => Home
app.get('/home',function(req,res){
    res.send("Home");//đường dẫn tĩnh
});

//localhost:3000/id => Home is id (id là thứ bạn muốn nhập vào)
app.all('/:id([0-9]{5})',function(req,res){
    res.send("Home is " + req.params.id);//lấy cái id mà được nhập phía trên
});//đường dẫn động

app.get('/pug',function(req,res){
    res.render('home');
});

*********************************************************************************
                Điền form nhé khi điền xong sẽ có backend xử lí
*********************************************************************************
app.get('/form', function(req,res){
    res.render('form');
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

**********************************************************************************

app.get('*',function(req,res){
    res.send('Error');
});

app.listen(process.env.PORT||3000);//set local port là 3000, có thể đổi từ 0 đến 25000 or hơn
*/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');//thư viên dùng cho form
var multer = require('multer');//thư viện dùng cho form
var upload = multer();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static("public"));

app.all('/',function(req,res){
    //res.cookie('name', 'express').send('cookie set'); //Sets name = express
    res.cookie('name', 'express').render("home");
    //if(req.cookies.name=='express')
    res.redirect('/home');//chuyển hướng qua trang khác
});

app.get('/clear_cookie_name', function(req,res){
    res.clearCookie('name');
    res.send('cookie name cleared');
});

app.all('/myproject',function(req,res){
    res.render("pagepro");
});

app.all('/page1',function(req,res){
    res.render("page1");
});

app.get('/form', function(req,res){
    res.render('form');
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/form', function(req, res){
   console.log(req.body);
   if(req.body.user=="quin"&&req.body.pass=="123456")//điều kiện giả sử thôi nha
   res.send("Correct");
   else res.send("Not correct");
});

app.all('*',function(req,res){
    res.send('Error');
});

app.listen(3000);
