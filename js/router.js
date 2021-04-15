define(function(){

    var internals = {};
    var externals = {};

    internals.routes = {
        index: { hash: "#index", controller: "index"},
        phrase_controller: { hash: "#phrase", controller: 'phrase'},
    };

    internals.defaultRoute = internals.routes.index;

    internals.initController = function(route){

        var theme = window.location.hash.split("-")[1];

        //alert("Entered initController to enter hash page");

        require(['./controller/' + route.controller], function(controller){
                controller.init(theme);
        });  
    }

    internals.getRoute = function(){
        var page = window.location.hash.split("-")[0];
        return Object.values(internals.routes).find(function(route){
            return route.hash === page;
        });
    }

    externals.init = function(){
        internals.initController(internals.getRoute() || internals.defaultRoute);
    
        window.onhashchange = function(){
            //alert("Entered new route. New route:", window.location.hash.substr(0));
            console.log("Route: " + window.location.hash);
            internals.initController(internals.getRoute() || internals.defaultRoute);
        }
    }
    
    return externals;
});