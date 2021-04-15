define(['view/index', 'services/index'], function(indexView, service){
    var internals = {};
    var externals = {};

    internals.reRoute = function(){
        window.location.hash = 'index';
    }

    externals.init = function(){
        var data = service.getInfo();
        console.log("Type of data: " + typeof data);
        data.then(function(data){
            indexView.show(data);
        });
        
    }

    return externals;
})