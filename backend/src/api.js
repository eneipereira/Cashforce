const express = require('express');
const cors = require('cors');
const invoiceRoute = require('./routes/invoice.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', invoiceRoute);

module.exports = app;