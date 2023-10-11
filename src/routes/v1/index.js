import express from 'express';
import {createTweet, getTweet} from '../../controllers/tweet-controllers.js'
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { singup , login } from '../../controllers/auth-controller.js';
import {authenticate} from '../../middleware/authenticate.js';

const router = express.Router();

router.post('/tweets', authenticate,createTweet);
router.get('/tweets/:id', getTweet);
router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment);

router.post('/signup', singup);

router.post('/login', login);

export default router;
