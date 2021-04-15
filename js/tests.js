const apiUrl = "https://api.chucknorris.io/jokes/random";

fetch(apiUrl)
    .then(function(response){
        return response.json();
    }
    ).then(function(data){
        console.log(data.value);
    });