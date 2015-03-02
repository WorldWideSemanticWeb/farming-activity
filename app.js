
// Main app class
enyo.kind({
	name: "Farming.App",
	kind: enyo.Control,
	classes: "main",
	components: [
		{components: [
			{name: "crops", kind: "Image", src: "icons/crops.png", classes: "cropsbutton", ontap: "showCrops"},
			{name: "livestock", kind: "Image", src: "icons/livestock.png", classes: "livestockbutton", ontap: "showLivestock"},
            {content: "Crops", classes: "crops_text"},
            {content: "Livestock", classes: "livestock_text"},
		]},
	],
         
    // Constructor
    create: function() {
        this.inherited(arguments);
    },
         
    // Show all crops
    showCrops: function(e, s) {
         Farming.context.home = new Farming.Crops().renderInto(document.getElementById("body"));
    },
         
    // Show all livestock
    showLivestock: function(e, s) {
         Farming.context.home = new Farming.Livestock().renderInto(document.getElementById("body"));
    }
});