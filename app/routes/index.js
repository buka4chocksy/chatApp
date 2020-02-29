const userAuthRoutes = require('./userAuthRoutes')
module.exports =  function(router){
    router.use('/auth' , userAuthRoutes())
    return router
}