import  mongoose from 'mongoose';

const commentScema = new mongoose.Schema({
    content: {
        type : String,
        required : true,
    },
    userEmail : {
        type : String
    },
});

//creating object of a model
const Comment = mongoose.model('Comment',commentScema);
export default Comment;
