"use strict";

import Koa from 'koa'
import fetch from 'node-fetch'
import assert from 'assert'
import bodyParser from 'koa-bodyparser'

let namePass={'asd':123,'sdf':234,'dfg':345}

const app = new Koa();

app.use(bodyParser());
app.use(async (ctx, next) => {
    await next();
    ctx.body =ctx.request.body
    console.log("ctx.body"+ ctx.body)

    let userName=ctx.request.body.userName
    let password=ctx.request.body.password
    // let namePass=ctx.request.body.namePass
    console.log("userName:"+userName);
    console.log("password:"+password);
    var pass=namePass[userName]
    console.log(password==pass); 
    ctx.response.body=password==pass||"账号密码不正确"

});

app.listen(5001);
console.log('app started at port 5001 ...');

// function findValue (obj,key, compare = (a, b) => a === b) {
//     console.log("value:"+Object.values(obj));
//     var key=Object.keys(obj).find(k => compare(k, key))
//     return obj[value]
// }


// function findKey (obj,value, compare = (a, b) => a === b) {

//     return Object.keys(obj).find(k => compare(obj[k], value))
//   }
// function Dictionary(){
// 	this.data = new Array();
 
// 	this.put = function(key,value){
// 		this.data[key] = value;
// 	};
// 	this.get = function(key){
// 		return this.data[key];
// 	};
// 	this.remove = function(key){
// 		this.data[key] = null;
// 	};
// 	this.isEmpty = function(){
// 		return this.data.length == 0;
// 	};
// 	this.size = function(){
// 		return this.data.length;
// 	};

// }