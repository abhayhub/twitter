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
        const tags = content.match(/#[a-zA-Z0-9]+/g).map((tag) => tag.substring(1));
        console.log(tags);

        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags =  await this.HashtagRepository.findByName(tags);
        //alreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);
        
        let titleOfPresentTags = await alreadyPresentTags.map(tags => tags.title);
        
        let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));
        
        newTags = newTags.map(tag => {
            return {title : tag, tweets : [tweet.id]}
        });
        const response = await this.HashtagRepository.bulkCreate(newTags);
        //todo create hashtags and add here
        /*
        1 - bulcreate in mongoose
        2 - filter title of hashtag based on multiple tags
        3 - how to add tweet id inside all the hashtags
        */
       alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
       })
        return tweet; 
    }
}
export default TweetService;