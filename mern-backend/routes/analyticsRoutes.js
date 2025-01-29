// routes/analyticsRoutes.js
const express = require('express');
const router = express.Router();

// Get content performance data
router.get('/content-performance', (req, res) => {
    // Mock data - in production, this would come from your database
    const data = [
        { month: 'Jan', blogViews: 12500, videoViews: 8500, linkedinEngagement: 4500 },
        { month: 'Feb', blogViews: 15000, videoViews: 10000, linkedinEngagement: 5200 },
        { month: 'Mar', blogViews: 18500, videoViews: 12500, linkedinEngagement: 6800 },
        { month: 'Apr', blogViews: 22000, videoViews: 15000, linkedinEngagement: 8500 }
    ];
    res.json(data);
});

// Get UGC metrics
router.get('/ugc-metrics', (req, res) => {
    const metrics = {
        totalReviews: '2.8K',
        averageRating: '4.8',
        testimonials: '450',
        unboxingVideos: '180'
    };
    res.json(metrics);
});

// Get engagement data
router.get('/engagement', (req, res) => {
    const data = [
        { category: 'Product Reviews', count: 850 },
        { category: 'Testimonials', count: 450 },
        { category: 'Unboxing Videos', count: 180 },
        { category: 'Sustainability Stories', count: 320 }
    ];
    res.json(data);
});

module.exports = router;