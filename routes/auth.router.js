import { Router } from "express";
const router = Router()
import { login, logout, register } from "../controllers/auth.controller.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";

router.post('/register', validateRegisterInput, register)
router.post('/login',validateLoginInput, login)
router.get('/logout', logout)

export default router