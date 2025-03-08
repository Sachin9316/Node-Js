const User = require('../models/userModel');
const token = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = "sachin";

const adminController = async (req, res) => {
    try {
        const { username, email, role, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!username || !email || !role || !password) {
            return res.json({
                status: false,
                message: "Please fill all the fields"
            })
        }

        // if (role !== 'admin') {
        //     return res.json({
        //         message: "Only admin can create admin user",
        //     })
        // }

        if (userExists) {
            return res.json({
                message: "email already exists",
            })
        }

        const jwt_Token = token.sign(password, JWT_SECRET);
        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            email,
            role,
            password: hashPassword,
        }).then((data) => {
            return res.json({
                message: "user created successfully",
                data,
            })
        }).catch((err) => {
            return res.json({
                message: "Error creating Admin chota error" + err,
            })
        })

    } catch (error) {
        return res.json({
            message: "Error creating Admin bada error" + err,
        })
    }
};

module.exports = adminController;