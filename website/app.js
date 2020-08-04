/* Global Variables */
let baseURL = 'https:/api.openweathermap.org/data/2.5/weather?'
let apiKey = '725b3a45caaa879e6ca01b95b0e1ee0d'
let zipCode
let countryCode = 'us'
let userRespon
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', clickFunc)

//Get Request Function
const weatherData = async (baseURL, zipCode, apiKey) => {
    const finalURL = `${baseURL}zip=${zipCode},${countryCode}&units=metric&appid=${apiKey}`;
    const response = await fetch (finalURL)
        try {const data = await response.json(); console.log(data); return data;}
        catch(error) {console.log("There was an error", error);}
    }


      // Post request
const postData = async ( url='', data = {} ) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-=origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log('error', error);
    }
    };


  function clickFunc(e) {
    const zipCode = document.getElementById('zip').value;
    const userRespon = document.getElementById('#feelings').value;
    console.log(zipCode)
    console.log(userRespon)
    weatherData(baseURL, zipCode, apiKey)
        .then((data) => {
            postData('/weatherdata', data);
        })}
