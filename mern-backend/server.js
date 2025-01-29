// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add this with other route imports
const chatbotRoutes = require('./routes/chatbotRoutes');

// Add this with other route middlewares
app.use('/api/chatbot', chatbotRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/glowup_ai', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
const campaignRoutes = require('./routes/campaignRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

app.use('/api/campaigns', campaignRoutes);
app.use('/api/analytics', analyticsRoutes);

// Basic test route
app.get('/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const cron = require('node-cron');
const Campaign = require('./models/Campaign');

// Schedule a job to mark expired campaigns as "completed"
cron.schedule('0 * * * *', async () => { // Runs every hour
   try {
       const expiredCampaigns = await Campaign.find({ dateTime: { $lt: new Date() }, status: { $ne: 'completed' } });

       for (let campaign of expiredCampaigns) {
           campaign.status = 'completed';
           await campaign.save();
       }

       console.log(`Updated ${expiredCampaigns.length} expired campaigns to 'completed'`);
   } catch (error) {
       console.error('Error updating expired campaigns:', error);
   }
});

