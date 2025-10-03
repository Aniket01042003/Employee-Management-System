const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/Db');

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const employeeRoutes = require('./routes/employees');
app.use('/api/employee', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;