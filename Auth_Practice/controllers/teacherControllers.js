const User = require('../models/userModel');
const token = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = "sachin";

const teacherController = async (req, res) => {
    try {
        const { username, email, role, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!username || !email || !role || !password) {
            return res.json({
                status: false,
                message: "Please fill all the fields"
            })
        }

        if (role !== 'teacher') {
            return res.json({
                message: "Only admin can create teacher",
            })
        }

        if (userExists) {
            return res.json({
                message: "email already exists",
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const jwt_Token = token.sign(password, JWT_SECRET);

        await User.create({
            username,
            email,
            role,
            password: hashPassword,
            token: jwt_Token,
        }).then((data) => {
            return res.json({
                message: "Teacher created successfully",
                data,
            })
        }).catch((err) => {
            return res.json({
                message: "Error creating Teacher chota error" + err,
            })
        })

    } catch (error) {
        return res.json({
            message: "Error creating Teacher bada error" + err,
        })
    }
};

module.exports = teacherController;