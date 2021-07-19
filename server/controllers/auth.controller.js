const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

let userSchema = require('../models/user.model')


// Signup user
const signup = async (req, res) => {
    const { 
        firstName, 
        lastName, 
        email, 
        password 
    } = req.body;
    try {
        let user = await userSchema.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }
        user = new userSchema({ 
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 8)
        })
        await user.save();
        res.status(200).json({
            message: "Success"
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

// Signin user
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userSchema.findOne({ email });
        if ( !user ) {
            return res.status(400).json({ 
                message: "User Not Exist"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if ( !isMatch ) {
            return res.status(400).json({ 
                message: "Incorrect Password!"
            });
        }
        const payload = {
            user: {
                id: user._id,
            }
        };
        jwt.sign(
            payload,
            "randomString",
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        )
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
}

// Update password
const forgotPassword = (req, res) => {
    userSchema.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data)
        }
    })
}

module.exports = { signup, signin, forgotPassword };