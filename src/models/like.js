import mongoose  from "mongoose";

const likeSchema = new mongoose.Schema({
    onModal : {
        type: String,
        required : true,
        enum : ['Tweet','Comment']
    },
    likeable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModal' 
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        red : 'User',
        required : true
    }
},{timestamps:true});
 
const Like = mongoose.model('Like',likeSchema);

export default Like;