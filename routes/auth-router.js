import Router from 'express'
import AuthController from "../controllers/auth-controller.js";

const router = new Router()

router.get('/', AuthController.getUsers);
router.get('/:id', AuthController.getUserById)
router.post('/registration', AuthController.createUser)
router.post('/login', AuthController.login)

export default router