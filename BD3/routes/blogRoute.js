const { Router } = require('express');
const route = Router();
const { post, getAllPost } = require('../controllers/Post');
const { like } = require('../controllers/Like');
const { comment } = require('../controllers/Comment');  

route.get('/get', getAllPost);
route.post("/create/post", post);
route.post("/like", like);
route.post("/comment/create", comment);

module.exports = route;