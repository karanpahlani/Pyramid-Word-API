const express = require('express');

const app = express();

// Middleware
app.use(express.json({ extended: false }));

app.get('/', (req,res) =>  res.send('API Running'));

//Routes
app.use('/api/pyramidWordChecker', require('./routes/api/pyramidWordChecker'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;