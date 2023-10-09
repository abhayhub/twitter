import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';

import apiRoutes from './routes/index.js'

const app = express();

const PORT = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


import {UserRepository , TweetRepository} from './repository/index.js';
import LikeService  from './services/like-service.js';

app.use('/api',apiRoutes);

app.listen(PORT, async() => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0,10);
    // const users = await userRepo.create({
    //     email : "abhayskp7948@gmail.com",
    //     password : '12234',
    //     name : 'Abhay'
    // });
    const users = await userRepo.getAll();
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id, 'Tweet',users[0].id);
});
