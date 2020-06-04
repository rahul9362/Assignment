'use strict';

const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema(
    {
        agent: {
            type: String,
            default: '',
        }
    },
    {
        timestamps: true,
        usePushEach: true
    }
);

const user = mongoose.model('Agent', agentSchema, 'agents');
module.exports = user;