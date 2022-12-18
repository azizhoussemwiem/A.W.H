const  mongoose  = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        lowercase: true,
        index: true,
        
    },
    password : {
        type : String,
        required : true,

    },
    role : {
        type: String,
        default: 'user',

    },
    avatar: {
        type: String,
        default: ''
    }}, {
        timestamps: true,
    }
    
);

const User = mongoose.model("User", userSchema);

module.exports = User;