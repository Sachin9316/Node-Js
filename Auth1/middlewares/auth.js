const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sachin'

exports.auth = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const tokenVerify = jwt.verify(user.password, JWT_SECRET);


        if (!tokenVerify) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        if (tokenVerify === password) {
            next();
        }


    } catch (error) {
        res.json({
            success: false,
            message: 'Invalid credentials'
        })
    }
}

exports.isStudent = async (req, res, next) => {
    try {
        const { role } = req.body;
        const user = await User.findOne({ role });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.role === "student") {
            return next();
        };

        res.json({
            success: false,
            message: 'You are not a student'
        })

    } catch (error) {
        res.json({
            success: false,
            message: 'Invalid user',
            error
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    try {
        const { role, email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.role === "Admin") {
            return next();
        };

        res.json({
            success: false,
            message: 'You are not a Admin'
        })

    } catch (error) {
        res.json({
            success: false,
            message: 'Invalid user',
            error
        })
    }
}