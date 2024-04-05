const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const { connectDB } = require('./config/db');
const { handleErrorsMiddleware } = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const bodyparser = require('body-parser');
const compression = require('compression');

const officeSpaceRoutes = require('./routes/officespace');
const reservationRoutes = require('./routes/reservation');
const peopleRoutes = require('./routes/people');
const paymentRoutes = require('./routes/payment');
const contactRoutes = require('./routes/contact');
const promoRoutes = require('./routes/promo');
const authRoutes = require('./routes/auth');

const { calculateDaysWithDatesArray, calculateTotalAmount } = require('./utils');
const { verifyToken } = require('./middleware/authHandler');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(compression());



app.get('/api',(req,res) => res.render('welcome',{ title: "API" }))
app.use('/api/space', officeSpaceRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/people', peopleRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/auth', authRoutes);

// app.post('/api/test', (req,res) => {
//     console.log(req.body)
//     res.status(200).json(req.body)
// })


// app.get('/', (req,res) => {
//     const title = "Home"
//     res.render('index',{ title });
// })

// Handle Errors
app.use(handleErrorsMiddleware);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    connectDB()
})