//1.HTTP module:
//oldest module
//runs on top of the node js which provides runtime enviornment for javascript
//To use the HTTP server and client one must require('node:http').

//The HTTP interfaces in Node.js are designed to support many features of the protocol 
//which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. 
//The interface is careful to never buffer entire requests or responses, so the user is able to stream data.
var http=require('http')
var server=http.createServer(function(req,res)
{
res.writeHead(200,{'content-type':'text/plain'})
res.write("Hello world!!!");
res.end("responde ended")
})
server.listen(8000);
console.log("server is running at port 8000")



//2.HTTP module:
//oldest module
//runs on top of the node js which provides runtime enviornment for javascript


var http=require('http');
var server=http.createServer(function(req,res){
    var path=req.url.replace(/\/?(?:\?.*)?$/).toLowerCase();
        switch(path){
            case '/home':
                res,writeHead(200,{'content-type':'text/html'})
                res.write('<h1>Home Page</h1>');
                res.write("Welcome,you are in home page");
                res.end("response ended");
                break;
                case '/aboutus':
                    res,writeHead(200,{'content-type':'text/html'})
                    res.write('<h1>About Us</h1>');
                    res.write("Welcome,you are in AboutUs page");
                    res.end("response ended");
                    break;
                 default:
                        res,writeHead(404,{'content-type':'text/plain'})
                        res.write('Not Found');
                        res.end("response ended");
                        break;
            
    }

});
server.listen(3000);
console.log("server running at port 3000")


//3.Express module:
//latest module
//runs on top of the node js which provides runtime enviornment for javascript
//Creates an Express application. The express() function is a top-level function exported by the express module.



const express=require('express');
const app1=express();
app1.get('/',(req,resp)=>{
    resp.sendFile('D:\DAC\Web TEchnologies\image.html',{root,__dirname});
})
app1.listen(4000);
console.log("server running at port 4000")


//************************--NODEJS--******************************* */


//Module is nothing but an collection of different files 
//module is nothing but an page with .js extension.

 /*to export functions/variables/constants so they can be used by others we need to use module.exports
 and to be able to use them we have to import that module inside .js file by using require keyword. 

*/
//os module
//filesystem module(fs module)
//http module
