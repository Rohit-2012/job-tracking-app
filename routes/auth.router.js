import { Router } from "express";
const router = Router()
import { login, logout, register } from "../controllers/auth.controller.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: {msg: 'IP rate limit exceeded, retry after 15 minutes'}
})

router.post('/register',apiLimiter, validateRegisterInput, register)
router.post('/login', apiLimiter, validateLoginInput, login)
router.get('/logout', logout)

export default router