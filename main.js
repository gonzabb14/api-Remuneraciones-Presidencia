const API_URL = "https://catalogodatos.gub.uy/dataset/13b9db1b-2f57-472f-aaa9-2906de549aa9/resource/3e2e8ff8-832e-4483-bc14-09056ef51dcb/download/envios-postales.json";

fetch(API_URL)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
      });

      
