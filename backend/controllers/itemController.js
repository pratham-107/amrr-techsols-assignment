// backend/controllers/itemController.js
const Item = require('../models/Item');
const nodemailer = require('nodemailer');

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.addItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json({ message: 'Item added' });
};

exports.enquireItem = async (req, res) => {
  const item = await Item.findById(req.body.itemId);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: `Enquiry about ${item.itemName}`,
    html: `
      <h3>Item Enquiry</h3>
      <p><strong>Item Name:</strong> ${item.itemName}</p>
      <p><strong>Type:</strong> ${item.itemType}</p>
      <p><strong>Description:</strong> ${item.description}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
  res.json({ message: 'Email sent' });
};
