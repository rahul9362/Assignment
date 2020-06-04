'use strict';

const mongoose = require('mongoose');

const policySchema = new mongoose.Schema(
    {
        policy_number: {
            type: String,
            default: '',
        },
        policy_start_date: {
            type: String,
            default: '',
        },
        policy_end_date: {
            type: String,
            default: '',
        },
        policy_type: {
            type: String,
            default: '',
        },
        policy_mode: {
            type: String,
            default: '',
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
        autoIndex: true,
        usePushEach: true
    }
);

const user = mongoose.model('Policy', policySchema, 'policies');
module.exports = user;