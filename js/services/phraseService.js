define(function(){

    var externals = {};

    externals.fetchPhrase = function(category){
        //alert("Entered phrase service");

        var toReturn = [];

        /*var promisePhrase = fetch("https://api.chucknorris.io/jokes/random?category=" + category);
        var promisePic = fetch("https://api.unsplash.com/search/photos?page=1&query=" + category + "&per_page=1");

        toReturn = Promise.all([promisePhrase, promisePic])
            .then(function(results){
                console.log(results);
                return results;
            });

        return toReturn;*/

        return fetch("https://api.chucknorris.io/jokes/random?category=" + category)
            .then(function(phrase){
                console.log("fetch phrase" + phrase);
                return phrase.json();
            })
            
    }

    return externals;

});