const { Router } = require('express');
const router = Router();
const { login, signup } = require('../controller/Auth.js');
const { auth, isStudent, isAdmin } = require('../middlewares/auth.js')

router.post('/login', login);
router.post('/signup', signup);
router.get('/student', auth, isStudent, (req, res) => {
    return res.json({
        success: true,
        message: 'You are a student',
    })
})
router.get('/admin', auth, isAdmin, (req, res) => {
    return res.json({
        success: true,
        message: 'Welcome Admin'
    })
})

module.exports = router;