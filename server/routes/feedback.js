const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Give a rating out of 5 for the following feedback. Only return a number from 1 to 5.\n\n"${message}"`
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const aiReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    const rating = parseFloat(aiReply);

    if (!aiReply) {
      console.error('Gemini response missing expected fields:', response.data);
      return res.status(500).json({ error: 'Unexpected response format from Gemini' });
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'AI did not return a valid number between 1 and 5' });
    }

    res.json({ rating });
  } catch (err) {
    console.error('Gemini API Error:', err.response?.data || err.message);
    res.status(500).json({
      error: 'Failed to fetch rating from Gemini',
      details: err.response?.data || err.message
    });
  }
});

module.exports = router;
