import praiseModel from '../models/praiseModel';

const praiseController = {
    // async 用于申明一个function是异步的， 而await用于等待一个异步方法执行完成  await只能出现在 async函数中
    // ctx是context的缩写 中文叫成上下文，可以理解为上(request)下(response)沟通的环境
    // 所以koa中把他们两都封装进了ctx对象，koa官方文档里的解释是为了调用方便
    // body是http协议中的响应体，header是指响应头  ctx.body = ctx.res.body = ctx.response.body
    praise() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index.html',{
                title: "点赞功能"
            })
        }
    },

    update() {
        return async(ctx, next) => {
            const praiseM = new praiseModel();
            ctx.body = await praiseM.updateCount();
        }
    },

    star() {
        return async(ctx, next) => {
            if(ctx.request.header['x-pjax']) {
                ctx.body = "<x-star></x-star>";
            } else {
                ctx.body = await ctx.render('star.html',{
                    title: "星星点赞"
                })
            }
        }
    },

    thumb() {
        return async(ctx, next) => {
            if(ctx.request.header['x-pjax']) {
                ctx.body = "<x-praise></x-praise>";
            } else {
                ctx.body = await ctx.render('index.html',{
                    title: "大拇指点赞"
                })
            }
        }
    },

    advertisement() {
        return async(ctx, next) => {
            ctx.body = '<div style="height: 100px;background-color: red">.......大幅广告........</div>';
        }
    }
} 

export default praiseController;