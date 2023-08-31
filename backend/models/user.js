import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    referalid: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    uniqueid: {
        type: String,
        required: true
    },
    transaction: [
        {
          
            uniqueid: {
                type: String,
                
            },
            email: {
                type: String,
                
            },
            amount: {
                type: Number,
                
            },
            methode: {
                type: String,
                
            },
            time: {
                type: Date,
                
            }
        }
    ]
}, {timestamps: true})

export default mongoose.model("User", userSchema)
