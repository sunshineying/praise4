import praiseController from './praiseController';

const controller = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/index/index', praiseController.praise())
            _.get('/index/update', praiseController.update())
            _.get('/index/star', praiseController.star())
            _.get('/index/thumb', praiseController.thumb())
            _.get('/index/adv', praiseController.advertisement())
        }))
    }
}

export default controller;