const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken')
const JWT_SECRET = 'sachin'

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exist" });
        }   

        const jwtsing = token.sign(password, JWT_SECRET);
        let hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: jwtsing,
            role
        }).then((data) => {
            res.json({
                success: true,
                message: "User created successfully",
                data: data
            })
        })

    } catch (error) {
        return res.status(500).json({ message: "Error in creating user", });
    }
}


exports.login = async (req, res) => {
    try {
        const { name, role, email, password } = req.body
        const findUser = await User.findOne({ email });

        const getPAssword = await User.findOne({ email });
        const tokenAuth = token.verify(getPAssword.password, JWT_SECRET);
        const dcryptPassword = await bcrypt.compare(password, findUser.password);

        if (!dcryptPassword && !tokenAuth) {
            return res.status(400).json({ message: "user does not exists" });
        }

       
        await User.find({ email, password: tokenAuth }).then((data) => {
            res.json({
                success: true,
                message: "User logged in successfully",
                data
            })
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Invalid email or password",
            error
        })
    }
}

