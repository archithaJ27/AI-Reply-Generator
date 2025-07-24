const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample POST route
app.post('/generate-reply', async (req, res) => {
  const { message } = req.body;

  // Simulate AI reply generation (replace this with real logic if needed)
  const reply = `Thank you for your message. We'll get back to you shortly.\n\nOriginal: ${message}`;

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ AI Email Reply Generator Backend is running at http://localhost:${PORT}`);
});
