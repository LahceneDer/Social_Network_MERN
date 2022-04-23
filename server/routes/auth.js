const router = require('express').Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")



router.post('/register', async (req, res) => {

    try {
        // generate hashed passwors
        const salt = await bcrypt.genSalt(10)
        const hashedPassward = await bcrypt.hash(req.body.password, salt)
        //create new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassward,
        });
    
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).send(err)
      }
})


// Login
router.post("/login", async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not fount")

        const validPasswd = await bcrypt.compare(req.body.password, user.password)
        !validPasswd && res.status(404).json("wrong password")

        res.status(200).json(user)
        
    } catch (error) {
        console.log(error);
    }
})

router.get('/', (req, res, next) => {
    res.send("auth router")
});

module.exports = router 