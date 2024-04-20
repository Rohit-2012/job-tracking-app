import { UnauthenticatedError } from "../errors/customErrors.js"
import { verifyJWT } from "../utils/token.utils.js"

export const authenticateUser = async (req, res, next) => {
    const {token} = req.cookies
    if (!token) throw new UnauthenticatedError('invalid authentication')
    
    try {
        const {userId, role} = verifyJWT(token)
        req.user = {userId, role}
        next()
    } catch (error) {
        throw new UnauthenticatedError('invalid authentication')
    }
}