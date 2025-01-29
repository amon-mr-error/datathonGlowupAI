// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        enum: ['Facebook', 'Instagram', 'Twitter']
    },
    campaignName: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value > new Date(); // Ensure date is in the future
            },
            message: 'Date and time must be in the future.'
        }
    
    },
    status: {
        type: String,
        enum: ['scheduled', 'active', 'completed'],
        default: 'scheduled'
    }
}, {
    timestamps: true
});

campaignSchema.virtual('isExpired').get(function () {
    return this.dateTime < new Date();
});


module.exports = mongoose.model('Campaign', campaignSchema);

// ---------------TEST----------------

