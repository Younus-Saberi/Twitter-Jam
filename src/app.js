const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const user = require("./routes/user");
const post = require("./routes/post");
const connectToDb = require("./utils/db");
const errorHandler = require("./middlewares/errorHandler");
const rateLimit = require("express-rate-limit");
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

//use swagger to document the APIs
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Twitter Jam',
      version: '1.0.0',
      description: 'Social Media Platform covered Create, Read, Update, and Delete operations using a Node.js API',
    },
    servers:[
      {url:'http://localhost:5000/api'}, 
    ],
  },

  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

connectToDb();
app.use(express.json());

const apiLimiter = new rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use("/api/", apiLimiter);

var corsOptions = {
  origin: process.env.URI || "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(morgan('combined'))
app.use("/api/v1/auth", cors(corsOptions), auth);
app.use("/api/v1/users", cors(corsOptions), user);
app.use("/api/v1/posts", cors(corsOptions), post);
//use to check if app is running or not
app.get('/',(req,res)=>{
  res.send("Hello World app is Running !!")
})

app.use(errorHandler);


module.exports = { app };
