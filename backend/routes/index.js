const express = require('express');
const router = express.Router();
const catchErrors = require('../middlewares/catchErrors');


const {
  getPosts,
  getPost,
  createPost,
} = require('../controllers/postControllers')

// //user
// router.get('/users/:id', catchErrors(getUser));
// router.post('/users', catchErrors(createUser));

//posts
router.get("/posts", catchErrors(getPosts));
//router.get("/posts/:id", catchErrors(getPost));
router.post("/posts", catchErrors(createPost));

module.exports = router;
