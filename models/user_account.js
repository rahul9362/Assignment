'use strict';

const mongoose = require('mongoose');

const userAccountSchema = new mongoose.Schema(
    {
        account_name: {
            type: String,
            default: '',
        },
        account_type: {
            type: String,
            default: '',
        }
    },
    {
        timestamps: true,
        autoIndex: true,
        usePushEach: true
    }
);

const user = mongoose.model('UserAccount', userAccountSchema, 'users_accounts');
module.exports = user;