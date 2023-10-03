const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const route = require('./routes');
const BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(route);


app.listen(PORT, (err) => {
    console.log('Server is running on ...', PORT);
})



