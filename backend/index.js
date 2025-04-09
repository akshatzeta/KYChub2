const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Load sample data
let data = require('./data.json');

// Get customers
app.get('/api/customers', (req, res) => {
  res.json(data);
});

// Update status
app.post('/api/customers/:id/status', (req, res) => {
  const { status } = req.body;
  const customer = data.find(c => c.customerId === req.params.id);
  if (customer) {
    customer.status = status;
    res.json({ success: true, customer });
  } else {
    res.status(404).json({ success: false, message: 'Customer not found' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on http://192.168.0.165:${PORT}`);
  });
  
