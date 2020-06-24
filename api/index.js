const express = require('express');

const updateView = require('./blogRoutes/updateBlogViews'),
    createBlog = require('./blogRoutes/createBlog');

const router = express.Router();

router.post('/updateViews/:id', updateView);
router.post('/createBlog', createBlog);

module.exports = router;