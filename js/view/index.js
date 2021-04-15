define(function(){

    var internals = {};
    var externals = {};
    
    externals.show = function(categories){

        $('#bottom_div').empty();

        let catDiv = $('#bottom_div');
        let listCats = "";
        $(catDiv).empty();

        $('<div class="main-categories">').appendTo(catDiv);

        console.log("I'm in the Index JS!");

        /*for(var i = 0; i != 1; i++){
            $("<br>").appendTo(catDiv);
        }*/

        console.log("And now the categories!");
        console.log(categories);
        categories.forEach(function(category){
            console.log("Here's a category: " + category);
            
            listCats = '<table width="70%" class="element" onclick=\'openQuoteOf("phrase-" + \"' + category + '\")\'>';
            listCats += '<tr><td><span class="line" ><img class="pic round pointer" src="./resources/' + category + '.jpg" height="200" width="200" /></span></td></tr>';
            listCats += '<tr><td align="top" width="200"><center><span class="title" width="200">' + capitalize(category) + '</span></center><br><br><br></td></tr>';
            listCats += "</table>";
            console.log(listCats);
            
            $(listCats).appendTo(catDiv);

        });

        for(var i = 0; i != 3; i++){
            $("<br>").appendTo(catDiv);
        }

        $("</div>").appendTo(catDiv);

        console.log("Html of catdiv:\n" + listCats);
        
    }

    openQuoteOf = function(category){
        window.location.hash = String(category);
    }

    var capitalize = function(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return externals;

})