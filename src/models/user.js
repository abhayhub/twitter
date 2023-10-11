import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema  = new mongoose.Schema({
    email : {
        type :String,
        required : true,
        unique : true,
    },
     password : {
        type : String,
        required : true,
     },
     name : {
        type : String,
        required : true,
     }
},{timestamps : true});

//writing hooks for encrypting password
userSchema.pre('save', function (next) {
   const user = this;
   const salt = bcrypt.genSaltSync(9);
   const encryptedpassword = bcrypt.hashSync(user.password,salt);
   user.password = encryptedpassword;
   next();
})

const User = mongoose.model('User',userSchema);
export default User;