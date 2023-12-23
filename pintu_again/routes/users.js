const mongoose = require('mongoose')
const plm=require('passport-local-mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/pintu_again')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    // required: true,
    unique: true,
  },
  name: {
    type: String,
  
  },
  contact: {
    type:Number,
    // required: true,
    unique: true,
  },
  email: {
    type:String,
    // required: true,
    unique: true,
  },
  password: {
    type:String,
    // required: true,
    
  },
  profileImage: {
    type:String,
  },
  boards: {
    /*like folder where user save pins/images */
    type: Array,
    default:[],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'post'
  }
]

  
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);