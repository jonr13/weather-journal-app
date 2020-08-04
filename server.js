let projectData = {};
let curTemp
let curDate
let useResp

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware. - allows use to parse JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance - allows requesting from a domain outside its own origin domain
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Serverconst
const port = 8000;
function listening(){
    console.log("server is running now");
    console.log(`running on the localhost: ${port}`)}

const server = app.listen(port, listening);

// Adding a GET ROUTE to add data to projectData array
function sendData (request, response) {
    response.send(projectData);
    return projectData;
}

app.get('/all', sendData);


function addWeather (req, res) {
    const curTemp = req.body.main;
    const curDate = req.body.main;
    const useResp = req.body.main;
    return curTemp, curDate, useResp;
}

app.post('/weatherdata', addWeather);

projectData['temperature'] = `${curTemp}`;
projectData['date'] = `${curDate}`;
projectData['userResponse'] = `${useResp}`;
