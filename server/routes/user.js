const userController = require('./../controllers/user')

module.exports = (router) => {

    /**
     * get session
     */
    router
        .route('/sessions/create')
        .post(userController.sessionCreate)

    /**
     * logout session
     */
    router
        .route('/sessions/logout')
        .post(userController.sessionLogout)
}