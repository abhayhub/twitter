import express from 'express';
import {createTweet} from '../../controllers/tweet-controllers.js';
const router = express.Router();
import {toggleLike} from '../../controllers/like-controller.js';

router.post('/tweets', createTweet);

router.post('/likes/toggle', toggleLike);

export default router;
