/* globals gauge*/
"use strict";
const fetch = require('node-fetch');

// import fetch from 'node-fetch'


let result
step("姓名 <arg0> 密码 <arg1>", async function(arg0, arg1) {

    fetch('http://localhost:5001', {
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
            userName:arg0,
            password:arg1
          })
    }).then(res => res.text()
    ).then(res =>  {
        result==res
        console.log("result:"+res)   
    })

});



// step("Open Baidu <arg0>", async function(arg0) {
//     var options = {method:'get',encoding:null,url:arg0};
//     request(options,(err,res,body)=>{
//         console.log("***************"+options.toString); 
//         if (err) {
//             show('failure');
//         } else {
//         //    console.log("*******========********"+body.toString());  
//         }
// 	});
// });

// step("Accert URL <arg0> Title <arg1>", async function  greet(arg0, arg1) {
//     var options = {method:'get',encoding:null,url:arg0};
//     console.log("1")
//     request(options,(err,res,body)=>{
//         console.log("2")
//         if (err) {
//             show('failure');
//         } else {
//             console.log("**************************************************")
//             console.log("文章："+res)
//             assert.equal(body.toString.tTitle,arg1,"标题不正确") 
//         }
// 	});
// });

// module.exports= greet;

// step("Open Baidu <url>", async (url) => {
// 	var options = {method:'get',encoding:'utf-8',url:url};
//     request(options,(err,res,body)=>{
    
//         if (err) {
//             show('failure');
//         } else {
//             console.log("***************"+body.toString());
//             document.getElementsByTagName("body")[0].innerHTML       
//         }
// 	});
// });


// var url = 'http://www.163.com'
// request(url, function (err, res, body) { 
//     console.log(body)
// })
