import Hashtag from '../models/hashtags.js';

class HashtagRepository{

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log("failed to create");
        }
        
    }

    async bulkCreate(data){
        try{
            const tags = await Hashtag.insertMany(data);
            return tags;
        }catch(error){
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
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

    // async pagination(offset,limit){
    //     try {

    //         const tweet = await Hashtag.find().skip(offset).limit(limit);
    //         return tweet;
            
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title : titleList
            })//.select('title -_id');// (-) sign is used from removing some attribute 
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log("failed to create");
        }

    }
}

export default  HashtagRepository;