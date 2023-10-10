import  mongoose, { mongo } from 'mongoose';

const commentScema = new mongoose.Schema({
    content: {
        type : String,
        required : true,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet','Comment']
    },

    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    }

},{timestamps : true});

//creating object of a model
const Comment = mongoose.model('Comment',commentScema);
export default Comment;
