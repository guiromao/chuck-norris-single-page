define(['view/phrase', 'services/phraseService'], function(view, service){

    var internals = {};
    var externals = {};

    externals.init = function(theme){
        //alert("Entered init of Phrase");

        var phrase = service.fetchPhrase(theme);

        phrase.then(function(data){
            view.showPhrase(data, theme);
        });
    }

    externals.back = function(){
        window.location.hash = 'index';
    }

    return externals;

});