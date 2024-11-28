const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
            // step 1 validate data 
            return res.status(400).json({ massage: 'Email is require' })
        }
        if (!password) {
            // step 1 validate data 
            return res.status(400).json({ massage: 'Password is require' })
        }

        //step2 check email in db alraedy??
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (user) {
            return res.status(400).json({ message: "Email already exits" })
        }

        //step3 HashPassword
        const hashPassword = await bcrypt.hash(password, 10)

        //step4 register
        await prisma.user.create({
            data: {
                email: email,
                password: hashPassword
            }
        })

        console.log(hashPassword)
        res.send('Register Success')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        //step1 check email
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if(!user || !user.enabled){
            console.log('User not found or not enabled!!')
            return res.status(400).json({ message: 'User not found or not enabled!!'})
        }
        //step2 check pass
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({ message: 'Password invalid!'})
        }
        //step3 create paylode
        const paylode = { //สร้างัวแปลมาเก็บเพื่อเอาไปใช้งานอื่นๆต่อไป
            id: user.id,
            email: user.email,
            role: user.role
        }
        console.log(paylode)
        //step4 create token


        res.send("hello login in ctrl")
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
}

exports.currentUser = async (req, res) => {
    try {
        res.send('hello currentUser in controller')
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}


