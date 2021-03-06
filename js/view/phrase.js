define(['controller/phrase'], function(controller){

    var internals = {};
    var externals = {};

    externals.showPhrase = function(data, word){
        var phrase = data.value;

        internals.word = word;

        //alert(phrase);

        let catDiv = $('#bottom_div');
        let hashtag = '<span class="center" ><font size=5>#' + word + '</span><br><br>';
        
        $(catDiv).empty();
        $(hashtag).appendTo(catDiv);

        internals.div = catDiv;

        var phraseElem = '<span class="phrase center">' + phrase + '</span>';
        var buttonBack = '<span class="back center clickable pointer" onclick="back()">Go back for more Categories!</span>';
        var buttonRefresh = '<br><span class="refresh center clickable pointer" onclick="refresh()">Get a new quote!</span>&nbsp;&nbsp;&nbsp;';

        $(phraseElem).appendTo(catDiv);

        for(var i = 0; i != 3; i++){
            $('<br>').appendTo(catDiv);
        }

        var number = parseInt(Math.random() * 20);

        fetch("https://api.unsplash.com/search/photos?client_id=eQsIJK1DUB32Wu6HRiD74FF5dAz4K2tQGjE6koRPJKg&page=1&per_page=20&query=" + word)
            .then(function(response){
                var data = response.json();

                return data;
            })
            .then(function(photoData){

                let photoUrl = photoData.results[number].urls.full;

                let picture = '<img class="center round" src="' + photoUrl + '" height="200"/><br><br><br>';
                $(picture).appendTo(catDiv);

                console.log(photoUrl);
            })
            .finally(function(){
                
                $(buttonRefresh).appendTo(catDiv);
                $(buttonRefresh).click(externals.refresh);
                $('<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>').appendTo(catDiv);
                $(buttonBack).appendTo(catDiv);
            });
    
    }

    back = function(){
        window.location.hash = 'index';
    }

    refresh = function(){
        $(internals.div).empty();
        window.location.hash = "";
        window.location.hash = "phrase-" + internals.word;
    }

    return externals;

});