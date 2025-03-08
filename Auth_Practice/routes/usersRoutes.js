const { Router } = require('express');
const router = Router();
const admin = require('../controllers/adminController');
const teacher = require('../controllers/teacherControllers');
const student = require('../controllers/studentsController');
const { adminMiddleware, teacherMiddleware, studentMiddleware } = require('../middlewares/authMiddleware');

router.post('/admin', admin);
router.post('/teacher', teacher);
router.post('/student', student);

router.get('/getAdmin', adminMiddleware, (req, res) => {
    return res.json({
        message: 'Admin logged in successfully',
        greet: `welcome mr/ms ${req.body.username} , good morning`
    })
})
router.get('/getTeacher', teacherMiddleware, (req, res) => {
    return res.json({
        message: 'Teacher logged in successfully',
        greet: `welcome mr/ms ${req.body.username} , good morning`
    })
})
router.get('/getStudent', studentMiddleware, (req, res) => {
    return res.json({
        message: 'Student logged in successfully',
        greet: `welcome mr/ms ${req.body.username} , good morning`
    })
})


module.exports = router;