import User from '../models/user.js';

export const userFetchDetails = async (req, res) => {
    const authenticatedUser = req.user;

    if (authenticatedUser.email) {
        try {
            const user = await User.findOne({email: authenticatedUser.email});
            if (user) {
                res.status(200).json({message:"approve", user});
            } else {
                res.status(404).json({message:"User not found"});
            }
        } catch (error) {
            res.status(500).json({message: "Error fetching user details"});
        }
    } else {
        res.status(403).json({message: "Forbidden"});
    }
};
export const UserSendingCoinByEmail = async (req, res) => {
    try {
        const {coin, email} = req.body
        const authenticatedUser = req.user
        const sendUser = await User.findOne({email: authenticatedUser.email});
        const user = await User.findOne({email: email})
        if (user) {
            const sendingUserCoin = sendUser.amount;
        
            switch (true) {
                case sendUser.email === email:
                    res.json({ message: "You can't send coin to yourself" });
                    break;
                
                case sendingUserCoin < 0:
                    res.json({ message: "You need to buy coin to send" });
                    break;
        
                case coin <= sendingUserCoin:
                    user.amount = parseFloat(user.amount) + parseFloat(coin);
                    sendUser.amount = parseFloat(sendUser.amount) - parseFloat(coin);
                    
                    const sendUserTransaction = {
                        uniqueid: '',
                        email: user.email,
                        amount: coin,
                        method: 'SEND',
                        time: new Date()
                    };
        
                    const userTransaction = {
                        uniqueid: '',
                        email: sendUser.email,
                        amount: coin,
                        method: 'RECEIVED',
                        time: new Date()
                    };
        
                    sendUser.transaction.push(sendUserTransaction);
                    await sendUser.save();
                    user.transaction.push(userTransaction);
                    await user.save();
                    
                    res.json({ message: 'The amount is sent' });
                    break;
        
                default:
                    res.json({ message: "You don't have that much of coin" });
            }
        } else {
            res.json({ message: "There is no such user" });
        }
        

    } catch (error) {
        console.log(error)
    }
}

export const UserSendingCoinById = async (req, res) => {
    try {
        const {coin, secretid} = req.body
        const authenticatedUser = req.user
        const sendUser = await User.findOne({email: authenticatedUser.email});
        const user = await User.findOne({uniqueid: secretid})
        if (user) {
            const sendingUserCoin = sendUser.amount;
        console.log(sendingUserCoin)
            switch (true) {
                case sendUser.uniqueid === secretid:
                    res.json({ message: "You can't send coin to yourself" });
                    break;
                
                case sendingUserCoin < 0:
                    res.json({ message: "You need to buy coin to send" });
                    break;
        
                case coin <= sendingUserCoin:
                    user.amount = parseFloat(user.amount) + parseFloat(coin);
                    sendUser.amount = parseFloat(sendUser.amount) - parseFloat(coin);
                    
                    const sendUserTransaction = {
                        uniqueid: user.uniqueid,
                        email: "",
                        amount: coin,
                        method: 'SEND',
                        time: new Date()
                    };
        
                    const userTransaction = {
                        uniqueid: sendUser.uniqueid,
                        email: "",
                        amount: coin,
                        method: 'RECEIVED',
                        time: new Date()
                    };
        
                    sendUser.transaction.push(sendUserTransaction);
                    await sendUser.save();
                    user.transaction.push(userTransaction);
                    await user.save();
                    
                    res.json({ message: 'The amount is sent' });
                    break;
        
                default:
                    res.json({ message: "You don't have that much of coin" });
            }
        } else {
            res.json({ message: "There is no such user" });
        }
        

    } catch (error) {
        console.log(error)
    }
}
