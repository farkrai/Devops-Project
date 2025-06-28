require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();
app.disable('x-powered-by');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const apiRoutes = require('./routes/api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // ✅ To parse JSON for /api requests
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
