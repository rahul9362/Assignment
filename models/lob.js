'use strict';

const mongoose = require('mongoose');

const lobSchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            default: '',
        }
    },
    {
        timestamps: true,
        usePushEach: true
    }
);

const user = mongoose.model('Lob', lobSchema, 'lob');
module.exports = user;