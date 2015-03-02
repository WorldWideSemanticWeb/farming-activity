define(function (require) {
    Farming.activity = require("sugar-web/activity/activity");
    app = null;

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        Farming.activity.setup();
        
        // Home button
        document.getElementById("home").onclick = function() {
            Farming.context.home = app = new Farming.App().renderInto(document.getElementById("body"));
        };
        
        // Forum button
        document.getElementById("forum");

        // Create and display first screen
		Farming.context.home = app = new Farming.App().renderInto(document.getElementById("body"));
        
    });

});
