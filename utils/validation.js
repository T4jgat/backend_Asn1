import db from "../config/db.js"

class Validation {
    async usernameValidation(username)  {
        const res = await db.query("SELECT * FROM users WHERE username=$1", [username])
        return res.rows.length !== 0

    }

    async passwordValidation(password)  {
        const regex =  /^(?=.*[A-Z])(?=.*\d).{5,}$/;
        return regex.test(password);
    }
}


export default new Validation()