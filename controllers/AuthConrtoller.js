import db from "../config/db.js";
import Validation from "../utils/validation.js";
import UserService from "../services/UserService.js";
import PasswordEnctyptor from "../utils/passwordEnctyptor.js";

class AuthConrtoller {
    async createUser(req, res) {
        const {username, password} = req.body

        if (await Validation.usernameValidation(username))
            return res.status(409).json({error: `User with username ${username} is already exists`})

        await UserService.registration(username, password)
        console.log(username, password)
        return res.json({message: "Registration successful!"})
    }

    async login(req, res) {
        const {username, password} = req.body
        const user = await UserService.findByUsername(username)

        if (!user) return res.status(404).json({message: "User is not exists"})

        const passwordIsMatch = await PasswordEnctyptor.compare(password, user.password)

        if (passwordIsMatch){
            return res.status(200).json({message: "Login successful"})
        } else {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

    }

    async getUsers(req, res) {
        const users = await UserService.findAll()
        return res.status(200).send(users)
    }

    async getUserById(req, res) {
        const {id} = req.params
        const user = await UserService.findById(id)
        return res.status(200).send(user)
    }
}

export default new AuthConrtoller()