const express = require('express')
const connect = require('./config/database');

//importing model
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

//import tweet repository
const TweetRepository = require('./repository/tweet-repository');




const app = express();

const PORT = 8000;

app.get('/',(req , res) => {
});

app.listen(PORT, async() => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");

    // const tweet = await Tweet.create({
    //     content: "apple is launching iphone 15 on independence day",
    //     userEmail : "apple.inc@gmail.com"
    // });

    //the type of tweets is object
    // const tweets = await Tweet.find({userEmail : 'elon@gmail.com'});
    // console.log(tweets);

    const tweetRepo = new TweetRepository();
    
    const tweet = await tweetRepo.create({content : 'India wins the world cup',userEmail : 'abhaygyan7948@gmail.com'});
    // const tweet = await tweetRepo.getwithcomment('64dcb304f12c768ba45b812c');
    // const tweet = await tweetRepo.pagination(1,2);
    // const comment = await Comment.create({content : 'how much it will cost'});
    
    // //here we are pushing comment inside tweet -> comments 
    // tweet.comments.push(comment);
    // await tweet.save();
    console.log(tweet); 
  
})