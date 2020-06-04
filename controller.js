const mongoose = require('mongoose');
const Promise = require('bluebird');
const User = mongoose.model('User');
const Policy = mongoose.model('Policy');
module.exports = {
    upload: async (req, res) => {
        try {
            console.log('hit the login route', req);
            let data = req.body;
            console.log('dataaaa', data.length, data[0])
            let promiseArray = [];
            data.forEach(row => {
                // let row = data[0];
                let user = {
                    firstname: row.firstname,
                    dob: row.dob,
                    address: row.address,
                    city: row.city,
                    state: row.state,
                    zip: row.zip,
                    phone: row.phone,
                    email: row.email,
                    gender: row.gender,
                    userType: row.userType
                };
                let saveUser = new User(user);
                promiseArray.push(saveUser.save());
            })
            Promise.all(promiseArray).then(saveUser => {
                console.log('resolvedm all', saveUser.length)
                data.forEach((row, index) => {
                    let policy = {
                        policy_number: row.policy_number,
                        policy_start_date: row.policy_start_date,
                        policy_end_date: row.policy_end_date,
                        policy_type: row.policy_type,
                        policy_mode: row.policy_mode,
                        user_id: saveUser[index]._id
                    }
                    let savePolicy = new Policy(policy);
                    savePolicy.save();
                })
            })
            res.status(200).send({ success: true, data: {} });
        } catch (err) {
            res.status(400).send({ success: false, error: err });
        }
    },



    search: async (req, res) => {
        try {
            console.log('hit the login route', req.params);
            let condition = { firstname: { $regex: req.params.user, $options: 'i' } };
            let users = await User.find(condition, { firstname: 1, email: 1, phone: 1, city: 1, state: 1, userType: 1 }).lean();
            res.status(200).send({ success: true, data: users });
        } catch (err) {
            res.status(400).send({ success: false, error: err });
        }
    },

    fetch: async (req, res) => {
        try {
            console.log('hit the login route', req.params);
            let userId = req.params.userId;
            let policy = await Policy.findOne({user_id: userId}).populate({path: 'user_id'});
            res.status(200).send({ success: true, data: policy });
        } catch (err) {
            res.status(400).send({ success: false, error: err });
        }
    },
}