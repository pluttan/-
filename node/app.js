const http = require("http");
const os= require("os");

http.createServer(function (reqest,response){
    response.end('<meta http-equiv="Refresh" content="0; url=html/index.html">')
}).listen(3000,"127.0.0.1",function(){
    console.log("Сервер начал прослушивание но порту 3000")
    let user=os.userInfo().username;
    console.log(user);
})
