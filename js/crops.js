// List of all crops
enyo.kind({
	name: "Farming.Crops",
	kind: enyo.Control,
	classes: "board",
    published: {
		context: null,
	},	
	components: [
		{components: [
			{name: "Corn", kind: "Image", src: "icons/corn.svg", classes: "secondmenubutton", ontap: "showCorn"},
            {name: "Wheat", kind: "Image", src: "icons/wheat.svg", classes: "secondmenubutton", ontap: "showWheat"},
			{name: "Potatoes", kind: "Image", src: "icons/potatoes.svg", classes: "secondmenubutton", ontap: "showPotatoes"},
            {name: "Rice", kind: "Image", src: "icons/rice.svg", classes: "secondmenubutton", ontap: "showRice"},
            {name: "Cassava", kind: "Image", src: "icons/cassava.png", classes: "secondmenubutton", ontap: "showCassava"},
            {content: "Corn/Maize", classes: "secondmenutext"},
            {content: "Wheat", classes: "secondmenutext"},
            {content: "Potatoes", classes: "secondmenutext"},
            {content: "Rice", classes: "secondmenutext"},
            {content: "Cassava", classes: "secondmenutext"},
            {name: "Sorghum", kind: "Image", src: "icons/sorghum.svg", classes: "secondmenubutton", ontap: "showSorghum"},
            {name: "Sweet Potatoes", kind: "Image", src: "icons/sweet_potatoes.svg", classes: "secondmenubutton", ontap: "showSweetPotatoes"},
            {name: "Yam", kind: "Image", src: "icons/yam.png", classes: "secondmenubutton", ontap: "showYam"},
            {name: "Soybeans", kind: "Image", src: "icons/soybeans.svg", classes: "secondmenubutton", ontap: "showSoybeans"},
            {name: "Coconuts", kind: "Image", src: "icons/coconuts.svg", classes: "secondmenubutton", ontap: "showCoconuts"},
            {content: "Sorghum", classes: "secondmenutext"},
            {content: "Sweet Potatoes", classes: "secondmenutext"},
            {content: "Yam", classes: "secondmenutext"},
            {content: "Soybeans", classes: "secondmenutext"},
            {content: "Coconuts", classes: "secondmenutext"},
		]},
	],
         
    // Constructor
    create: function() {
        this.inherited(arguments);
    },
         
    // show corn function
    showCorn: function(e, s) {
        Farming.context.home = new Farming.Corn().renderInto(document.getElementById("body"));
    },
    
    // show wheat function
    showWheat: function(e, s) {
        Farming.context.home = new Farming.Wheat().renderInto(document.getElementById("body"));
    },
        
    // show potatoes function
    showPotatoes: function(e, s) {
        Farming.context.home = new Farming.Potatoes().renderInto(document.getElementById("body"));
    },
        
    // show rice function
    showRice: function(e, s) {
        Farming.context.home = new Farming.Rice().renderInto(document.getElementById("body"));
    },
         
    // show cassava function
    showCassava: function(e, s) {
        Farming.context.home = new Farming.Cassava().renderInto(document.getElementById("body"));
    },
         
    // show sorghum function
    showSorghum: function(e, s) {
        Farming.context.home = new Farming.Sorghum().renderInto(document.getElementById("body"));
    },
    
    // show sweet potatoes function
    showSweetPotatoes: function(e, s) {
        Farming.context.home = new Farming.SweetPotatoes().renderInto(document.getElementById("body"));
    },
         
    // show  function
    showYam: function(e, s) {
        Farming.context.home = new Farming.Yam().renderInto(document.getElementById("body"));
    },
         
    // show cassava function
    showSoybeans: function(e, s) {
        Farming.context.home = new Farming.Soybean().renderInto(document.getElementById("body"));
    },
         
    // show cassava function
    showCoconuts: function(e, s) {
        Farming.context.home = new Farming.Coconuts().renderInto(document.getElementById("body"));
    },
});
