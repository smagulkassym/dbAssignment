const db = require('../db');

class UserController{
    async createUser(req, res) {
        const {name, surname, email, salary, phone, cname} = req.body
        const newUser = await db.query(` 
            INSERT INTO public.users
                (email, name, surname, salary, phone, cname)
            VALUES 
                ('${email}', '${name}', '${surname}', ${salary}, '${phone}', '${cname}')
            RETURNING *    
                `)
        res.json(newUser.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)
    }

    async getUser(req, res) {
        const email = req.params.email
        const user = await db.query(`SELECT * FROM users WHERE email = '${email}'`)
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {name, surname, email, salary, phone, cname} = req.body
        const user = await db.query(`
            UPDATE users
            SET name = '${name}', 
                surname = '${surname}', 
                salary = '${salary}', 
                phone = '${phone}', 
                cname = '${cname}'
            WHERE email = '${email}'
            RETURNING *
        `)
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const email = req.params.email
        const user = await db.query(`DELETE FROM users WHERE email = '${email}'`)
        res.json(user.rows[0])
    }
}

module.exports = new UserController()