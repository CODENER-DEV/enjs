const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route');
const roleRoutes = require('./routes/role.route');
const moviesRoutes = require('./routes/movie.route');
require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_PORT = process.env.CLIENT_PORT;
const cors = require('cors');
const whitelist = ['http://localhost:' + SERVER_PORT, 'http://localhost:' + CLIENT_PORT];

const corsOptions = {
    origin: function (origin, callback) {
        if(!origin){
          return callback(null, true);
        }
        if(whitelist.indexOf(origin) !== -1){
          callback(null, true);
        }
        else{
          callback(new Error('Not allowed by CORS'))
        }
      },
    methods: ['GET','POST','DELETE','UPDATE','PUT'],
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving responses in JSON
app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Hello, welcome to the Movies API'
    })
});

// Routes
app.use('/api/Users', userRoutes); // /Users
app.use('/api/Roles', roleRoutes); // /Roles
app.use('/api/Movies', moviesRoutes); // /Movies

// Connection MongoDB with Mongoose
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.nm3y1co.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Database connected');
    //Server Express listening
    app.listen(SERVER_PORT, () => {
        console.log("Express listening 🚀 in port: " + SERVER_PORT);
    });
}).catch(e => console.log('Error DB:', e));