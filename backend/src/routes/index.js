const categoryRoute = require('./category');

function route(app){
    app.use('/category', categoryRoute);
}
module.exports = route;