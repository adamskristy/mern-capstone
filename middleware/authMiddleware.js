const jwt = require('jsonwebtoken')


function authorize(req, res, next) {
    
    

    try {
        let token = req.header("Authorization")
    
        if (!token) {
            throw new Error('No token provided')
        }
    
        token = token.replace("Bearer ", "")

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        if (payload.error) {
            throw new Error(payload.error)
        }

        req.userId = payload.id
        req.user = payload.user
        console.log(`inside the user: ${req.user} authorize middleware`)
       
        next()

    } catch (error) {
        res.status(403).json({ error: error.message })
    }
}

module.exports = {
    authorize
}
