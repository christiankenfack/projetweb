const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');


//Import router
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');


//CONNECT DATABASE 


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('Db connected'))
    .catch((err) => console.log(err))

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//ROUTE MIDDLEWHERE
app.use('/api', authRoutes)
app.use('/api', projectRoutes)
app.use('/api', taskRoutes)


//ERROR MIDDLEWARE
app.use(errorHandler);



const port = process.env.PORT || 8002;

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});