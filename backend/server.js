const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API routes can go here if needed
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
