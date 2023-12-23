var express = require('express');
const passport = require('passport');
var router = express.Router();
const userModel = require('./users')
const postModel = require('./post')
const localStrategy = require('passport-local')
const upload=require('./multer')
passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function(req, res, next) {
  res.render('register',{nav:false});
});

router.get('/login', (req, res, next) => {
  res.render('login',{nav:false})
})

router.get('/show/posts',isLoggedIn ,async(req, res, next) => {
  const user=await userModel.findOne({username:req.session.passport.user}).populate('posts')
  res.render('show', { user, nav: true });
})
router.get('/feed',isLoggedIn ,async(req, res, next) => {
  const user=await userModel.findOne({username:req.session.passport.user})
  const posts = await postModel.find().populate('user')
  // console.log(posts)
  res.render('feed', { user,posts, nav: true });
})

router.get('/profile', isLoggedIn,async(req, res, next) => {
  const user = await userModel
    .findOne({ username: req.session.passport.user })
  .populate('posts')
    res.render('profile', { user,nav:true });
    // console.log(user)
})
router.get('/add', isLoggedIn,async(req, res, next) => {
  
  res.render('add', { nav:true });
})
router.post('/fileupload', isLoggedIn,upload.single('image'),async(req, res, next) => {

  const user=await userModel.findOne({ username: req.session.passport.user })
  user.profileImage = req.file.filename;
  await user.save();
  res.redirect('/profile')
  // res.send(user) // complete user details
  // console.log(user)
})
router.post('/createpost', isLoggedIn,upload.single('postimage'),async(req, res, next) => {

  const user=await userModel.findOne({ username: req.session.passport.user })

  const post=await postModel.create({
    user: user._id,
    title:req.body.title,
    description: req.body.description,
    image:req.file.filename,
  })
  
  // await post.save();
  user.posts.unshift(post._id)
  await user.save();
  res.redirect('/profile')
  // res.send(user) // complete user details
  // console.log(user)
})

router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/')
  });
});

router.post('/register', async function (req, res) {
  const email = req.body.email;
    // Check if the email is already registered
    const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    // If the email is already registered, send an alert
    // return res.status(400).json({
    //   success: false,
    //   message: 'Email is already registered. Please use a different email.',
    // });
    res.redirect('/login');
  } else {
      
    

    var userdata = new userModel({
      username: req.body.username,
      email: req.body.email,
      contact: req.body.contact,
    
    });

    userModel.register(userdata, req.body.password)
      .then(function (registereduser) {
        passport.authenticate('local')(req, res, function () {
          res.redirect('/profile')
        })
      })
  }
});

router.post('/login', passport.authenticate('local', {
  successRedirect:'/profile',
  failureRedirect:'/'
}),function(req,res){})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}
module.exports = router;
