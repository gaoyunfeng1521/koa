// const Koa = require('koa');
// const router = require('koa-router');
// const bodyParser = require('koa-bodyparser');


import Koa from 'koa'
import router from  'koa-router'
import bodyParser from  'koa-bodyparser'
import exec1 from  'child_process'
const app = new Koa();

const exec=exec1.exec
let shell="npm test"

app.use(bodyParser());
app.use(async (ctx, next) => {
    await next();
    ctx.body =ctx.request.body
    console.log("ctx.body:"+ctx.body.userName);

    //执行shell命令
    exec(shell, function(error, stdout, stderr) {
        console.log("shell:"+shell)
        if(error){
            console.error(error);
        }
        else{
            console.log("success");
            console.log("stdout:"+stdout);
        }
    });
});

app.listen(5000);
console.log('app started at port 5000 ...');

