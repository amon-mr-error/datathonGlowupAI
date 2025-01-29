// routes/campaignRoutes.js
const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// Get all campaigns
router.get('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ createdAt: -1 });
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get expired campaigns
router.get('/expired', async (req, res) => {
    try {
        const expiredCampaigns = await Campaign.find({ dateTime: { $lt: new Date() } }).sort({ dateTime: -1 });
        res.json(expiredCampaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 });
 

// Create a new campaign
router.post('/', async (req, res) => {
    try {
        const campaign = new Campaign({
            platform: req.body.platform,
            campaignName: req.body.campaignName,
            dateTime: req.body.dateTime
        });
        const newCampaign = await campaign.save();
        res.status(201).json(newCampaign);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update campaign status
router.patch('/:id', async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (campaign) {
            campaign.status = req.body.status || campaign.status;
            const updatedCampaign = await campaign.save();
            res.json(updatedCampaign);
        } else {
            res.status(404).json({ message: 'Campaign not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;