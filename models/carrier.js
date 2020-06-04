'use strict';

const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema(
    {
        company_name: {
            type: String,
            default: '',
        }
    },
    {
        timestamps: true,
        usePushEach: true
    }
);

const user = mongoose.model('Carrier', carrierSchema, 'carriers');
module.exports = user;