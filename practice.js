
  
      //   Chaining of Promises
      getWeather(baseURL, zipCode, countryCode, apiKey)
        .then((data) => {
          if (data.main !== undefined) {
            data.main.currentTime = newDate;
            data.main.userResponse = textAreaContent;
          } else {
            alert('Error, Please enter Zip Code');
          }
  
          postData('/database', data);
        })
        .then(() => {
          updateUI();
        });
    });
  
    window.onload = () => {
      updateUI();
    };
  })();