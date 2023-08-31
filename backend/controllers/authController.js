import User from '../models/user.js'
import jwt from 'jsonwebtoken'
export const userRegister = async (req, res, next) => {
    try {
        const {username, email, password, dob} = req.body
        const refereduserreferalid = req.body.referalid
        // Combine username, email, for combinedValueforuniqueid and Combine username, email, and date for combinedValueforuniqueid
        const combinedValue = username + email;
        const combinedValueforuniqueid = username + email + dob;
        const hashforreferalid = crypto.createHash('md5').update(combinedValue).digest('hex');
        const hashforuniqueid = crypto.createHash('md5').update(combinedValueforuniqueid).digest('hex');

        // Take the first 10 characters of the hash to create a unique key
        const uniqueKeyforreferalid = (hashforreferalid.slice(0, 10)).toUpperCase()
        const uniqueKeyforuniqueid = (hashforuniqueid.slice(0, 10)).toUpperCase()


        // creating a new user object
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            dob: dob,
            referalid: uniqueKeyforreferalid,
            amount: 1000,
            uniqueid: uniqueKeyforuniqueid,
            transaction: {}

        })
        if (refereduserreferalid) {
            const refuser = await User.findOne({referalid: refereduserreferalid})

            if (refuser) {
                refuser.amount = parseFloat(refuser.amount) + 200; // Add 200 to the current amount
                await refuser.save(); // Don't forget to save the updated user
            }
        }

        await newUser.save()

        return res.status(200).json({message: "approve"});


    } catch (error) {
        next(error)
    }
}

export const UserLogin = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (! user) {
        res.json({message: "not registerd"})
    } else {
        const userpassword = user.password
        if (userpassword === password) {
            const token=jwt.sign({email},"mysecretkey",{expiresIn: "1d"})
            res.json({message:"approve",token})
        } else {
            res.json({message: "password error"})

        }
    }
}
