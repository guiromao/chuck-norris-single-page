define(function(){

    var externals = {};

    externals.getInfo = function(){
    
        return fetch("https://api.chucknorris.io/jokes/categories")
        .then(function(response){
            return response.json();
        });
    }

    return externals;

});