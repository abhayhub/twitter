import express from 'express';
import {connect} from './config/database.js';
import service  from './services/tweet-service.js';


const app = express();

const PORT = 8000;



app.listen(PORT, async() => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");
    let ser = new service();
    await ser.create({
        content : "#INDIA vs #Australia"
    })
});
