const API_URL = "https://randomuser.me/api/";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0]);
    })
    .catch(error => {
        console.log(error);
      });