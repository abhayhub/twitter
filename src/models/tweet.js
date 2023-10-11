import  mongoose from 'mongoose';

//schema take object as input 
const tweetSchema = new mongoose.Schema({
    content: {
        type : String,
        required : true,
        //doing charcter validation
        //max  : [chacracter limit, error message];
        max : [250, 'Tweet can not be more than 250 character']
    },
    likes: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ],
    //storing comment here so that we can show some comment with tweet 
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
},{timestamps : true});

// tweetScema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \nCreated by : ${this.userEmail}`;
// })

//middleware aka hooks
// tweetScema.pre('save', function(next){
//     console.log("Inside a hook");
//     this.content = this.content + '....';
//     next();
// })

//creating object of a model

const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;