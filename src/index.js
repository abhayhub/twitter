import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';

import apiRoutes from './routes/index.js'

const app = express();

const PORT = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api',apiRoutes);


app.listen(PORT, async() => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");
    // await ser.create({
    //     content : "#INDIA vs #Australia"
    // })
});
