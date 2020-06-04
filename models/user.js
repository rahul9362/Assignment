'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            default: '',
        },
        dob: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        city: {
            type: String,
            default: '',
        },
        state: {
            type: String,
            default: '',
        },
        zip: {
            type: String,
            default: '',
        },
        phone: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            default: '',
        },
        gender: {
            type: String,
            default: '',
        },
        userType: {
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

const user = mongoose.model('User', userSchema, 'users');
module.exports = user;