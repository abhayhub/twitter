import Tweet from '../models/tweet.js';

class TweetRepository{

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log("failed to create");
        }
        
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log("failed to create");
        }

    }

    // async update(tweetid,data){
    //     try {
    //         //by default findByIdAndUpdate() update document in db but return old document
    //         //so if you want to get updated document then pass ({new : true}) inside function;
    //         const tweet = await Tweet.findByIdAndUpdate(tweetid,data,{new : true});
    //         return tweet;
    //     } catch (error) {
    //         console.log("failed to create");
    //     }
    // }

    async getwithcomment(id){
        //by deafult mongoose return mongoose document which looks similar like js object but it is not same;
        //if you want get plain javascript object attach .lean()  method at end of query
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async pagination(offset,limit){
        try {

            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
            
        } catch (error) {
            console.log(error);
        }
        
    }

    async delete(id){

        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log("failed to create");
        }

    }
}
export default TweetRepository;