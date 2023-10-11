import {TweetRepository, HashtagRepository} from '../repository/index.js';


class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;

        //extracting tags from tweets using regex;
        //storing all tags after removing'#'
        const tags = content.match(/#[a-zA-Z0-9]+/g).map((tag) => tag.substring(1).toLowerCase());
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags =  await this.HashtagRepository.findByName(tags);
        let titleOfPresentTags = await alreadyPresentTags.map(tags => tags.title);
        
        let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));
        
        newTags = newTags.map(tag => {
            return {title : tag, tweets : [tweet.id]}
        });
        await this.HashtagRepository.bulkCreate(newTags);
       alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
       });
        return tweet; 
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getwithcomment(tweetId);
        return tweet;
    }
}
export default TweetService;