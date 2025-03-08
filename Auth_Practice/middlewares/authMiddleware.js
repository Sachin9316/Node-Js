const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const adminMiddleware = async (req, res, next) => {
    try {
        const { role, email, username, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!username || !email || !role || !password) {
            return res.json({
                status: false,
                message: "Please fill all the fields"
            })
        }
        
        if (!userExists) {
            return res.json({
                message: "User does not exist"
            })
        };
        
        if (role !== "admin" || userExists.role[0] !== "admin") {
            return res.json({
                success: false,
                role,
                userExists,
                message: "Only admin can access this route"
            })
        }
        
        const dcrypt = await bcrypt.compare(password, userExists.password);
        
        if (!dcrypt) {
            return res.json({
                message: "Invalid password"
            })
        }

        next();

    } catch (error) {
        return res.json({
            message: "Invalid request auth middleware" + error
        })
    }
}
const studentMiddleware = async (req, res, next) => {
    try {
        const { role, email, username, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!username || !email || !role || !password) {
            return res.json({
                status: false,
                message: "Please fill all the fields"
            })
        }

        if (!userExists) {
            return res.json({
                message: "User does not exist"
            })
        };

        if (role !== "student" || userExists.role[0] !== "student") {
            return res.json({
                role,
                message: "Only student can access this route"
            })
        }

        const dcrypt = await bcrypt.compare(password, userExists.password);

        if (!dcrypt) {
            return res.json({
                message: "Invalid password"
            })
        }

        next();

    } catch (error) {
        return res.json({
            message: "Invalid request auth middleware"
        })
    }
}

const teacherMiddleware = async (req, res, next) => {
    try {
        const { role, email, username, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!username || !email || !role || !password) {
            return res.json({
                status: false,
                message: "Please fill all the fields"
            })
        }

        if (!userExists) {
            return res.json({
                message: "User does not exist"
            })
        };

        if (role !== "teacher" || userExists.role[0] !== "teacher") {
            return res.json({
                role,
                message: "Only teacher can access this route"
            })
        }

        const dcrypt = await bcrypt.compare(password, userExists.password);

        if (!dcrypt) {
            return res.json({
                message: "Invalid password"
            })
        }

        next();

    } catch (error) {
        return res.json({
            message: "Invalid request auth middleware"
        })
    }
}

module.exports = {
    adminMiddleware,
    teacherMiddleware,
    studentMiddleware
}