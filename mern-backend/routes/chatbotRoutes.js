
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Campaign = require('../models/Campaign');
const Analytics = require('../models/Analytics');


const VEXT_API_KEY = process.env.VEXT_API_KEY;
const CHANNEL_TOKEN = 'user_1';
const ENDPOINT_ID = 'E2BX5WTNWS'; // Put this in your .env file
const VEXT_API_URL = `https://payload.vextapp.com/hook/${ENDPOINT_ID}/catch/${CHANNEL_TOKEN}`;

let chatHistory = [];


//-----------------------Basic Chatbot -------------------------
router.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    
    // Log the request details
    console.log('Sending request to Vext:', {
      url: VEXT_API_URL,
      message: userMessage,
      hasApiKey: !!VEXT_API_KEY
    });

    // Make the request to Vext
    const response = await axios.post(VEXT_API_URL, {
      payload: userMessage
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Apikey': `Api-Key ${VEXT_API_KEY}`
      }
    });

    // Log the response
    console.log('Vext response:', response.data);

    if (!response.data) {
      throw new Error('No response data received from Vext');
    }

    // Send the response back to the client
    res.json({ 
      response: response.data.text || response.data,
      status: 'success'
    });

  } catch (error) {
    // Detailed error logging
    console.error('Chat error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });

    res.status(500).json({ 
      error: 'Error processing chat message',
      details: error.message,
      status: 'error'
    });
  }
});

module.exports = router;



//---------------------WORKING---------------------------
// router.post('/chat', async (req, res) => {
//   try {
//     const userMessage = req.body.message;

//     // Fetch active marketing campaigns
//     const campaigns = await Campaign.find({ status: 'active' }).lean();
//     const analyticsData = await Analytics.find({}).lean();

//     // Format data for system prompt
//     const campaignDetails = campaigns.map(c => `${c.name}: ${c.description}`).join("\n");
//     const analyticsSummary = analyticsData.map(a => `${a.metric}: ${a.value}`).join("\n");

//     // Add user message to chat history
//     chatHistory.push({ role: 'user', content: userMessage });

//     // Create request payload for Vext AI
//     const response = await axios.post(VEXT_API_URL, {
//       model: 'vext-llama-3-8b',
//       messages: [
//         {
//           role: "system",
//           content: `You are a marketing campaign assistant. Use this context:
//           Active Campaigns: ${campaignDetails}
//           Analytics: ${analyticsSummary}
//           Respond to user questions based on this data and general marketing knowledge.`
//         },
//         ...chatHistory
//       ],
//       max_tokens: 500,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${VEXT_API_KEY}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     // Get AI response
//     const aiResponse = response.data.choices[0].message.content;

//     // Add AI response to chat history
//     chatHistory.push({ role: 'assistant', content: aiResponse });

//     res.json({ response: aiResponse });

//   } catch (error) {
//     console.error('Chat error:', error);
//     res.status(500).json({ error: 'Error processing chat message' });
//   }
// });

// module.exports = router;



//FOR PAYLOAD AND INTEGRATING ANALYTICS


