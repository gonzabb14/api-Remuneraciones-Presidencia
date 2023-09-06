const API_URL = "https://catalogodatos.gub.uy/dataset/15b6aac2-2a15-41e7-a86c-2579e638ecbe/resource/c00bb10f-6d21-4627-b9fb-55cd521ea906/download/remuneraciones-ursec-2023.json";

fetch(API_URL)
    .then(response => {
        console.log(response);
    })