//console.log("javascript loaded");

 d3.csv(
    'adae.csv',
    function(d,i) {
        return d;
    },
    function(data) {
        var instance = aeTimelines(
            '#container', // element
            {
            } // settings
        );
        instance.init(data);
        instance.wrap.on("participantsSelected",function(d){
          console.log(d3.event.data);
        });
    }
);
