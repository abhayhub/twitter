import express from 'express';
import {createTweet, getTweet} from '../../controllers/tweet-controllers.js';
const router = express.Router();
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';


router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);
router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment);

export default router;
