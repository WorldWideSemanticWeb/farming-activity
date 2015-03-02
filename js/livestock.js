
// List of all crops
enyo.kind({
	name: "Farming.Livestock",
	kind: enyo.Control,
	classes: "board",
    published: {
		context: null,
	},	
	components: [
		{components: [
			{name: "Cattle", kind: "Image", src: "icons/cattle.svg", classes: "secondmenubutton", ontap: "showCattle"},
            {name: "Sheep", kind: "Image", src: "icons/sheep.svg", classes: "secondmenubutton", ontap: "showSheep"},
			{name: "Goats", kind: "Image", src: "icons/goats.svg", classes: "secondmenubutton", ontap: "showGoats"},
            {name: "Horse", kind: "Image", src: "icons/horse.svg", classes: "secondmenubutton", ontap: "showHorses"},
            {name: "Pig", kind: "Image", src: "icons/pig.svg", classes: "secondmenubutton", ontap: "showPigs"},
            {content: "Cattle", classes: "secondmenutext"},
            {content: "Sheep", classes: "secondmenutext"},
            {content: "Goats", classes: "secondmenutext"},
            {content: "Horses", classes: "secondmenutext"},
            {content: "Pigs", classes: "secondmenutext"},
            {name: "Deer", kind: "Image", src: "icons/deer.svg", classes: "secondmenubutton", ontap: "showDeer"},
            {name: "Poultry", kind: "Image", src: "icons/chicken.svg", classes: "secondmenubutton", ontap: "showPoultry"},
            {name: "Guinea Pig", kind: "Image", src: "icons/guinea_pig.png", classes: "secondmenubutton", ontap: "showGuineaPig"},
            {name: "Buffalo", kind: "Image", src: "icons/buffalo.svg", classes: "secondmenubutton", ontap: "showBuffalo"},
            {name: "Rabbit", kind: "Image", src: "icons/rabbit.svg", classes: "secondmenubutton", ontap: "showRabbit"},
            {content: "Deer", classes: "secondmenutext"},
            {content: "Poultry", classes: "secondmenutext"},
            {content: "Guinea Pig", classes: "secondmenutext"},
            {content: "Buffalo", classes: "secondmenutext"},
            {content: "Rabbit", classes: "secondmenutext"},
		]},
	],
         
    // Constructor
    create: function() {
        this.inherited(arguments);
    },
         
    // show cattle function
    showCattle: function(e, s) {
        Farming.context.home = new Farming.Cattle().renderInto(document.getElementById("body"));
    },
    
    // show sheep function
    showSheep: function(e, s) {
        Farming.context.home = new Farming.Sheep().renderInto(document.getElementById("body"));
    },
        
    // show goats function
    showGoats: function(e, s) {
        Farming.context.home = new Farming.Goats().renderInto(document.getElementById("body"));
    },
        
    // show horses function
    showHorses: function(e, s) {
        Farming.context.home = new Farming.Horses().renderInto(document.getElementById("body"));
    },
         
    // show pigs function
    showPigs: function(e, s) {
        Farming.context.home = new Farming.Pigs().renderInto(document.getElementById("body"));
    },
    
    // show deer function
    showDeer: function(e, s) {
        Farming.context.home = new Farming.Deer().renderInto(document.getElementById("body"));
    },
          
    // show poultry function
    showPoultry: function(e, s) {
        Farming.context.home = new Farming.Poultry().renderInto(document.getElementById("body"));
    },

    // show guinea pig function
    showGuineaPig: function(e, s) {
        Farming.context.home = new Farming.GuineaPig().renderInto(document.getElementById("body"));
    },

    // show buffalo function
    showBuffalo: function(e, s) {
        Farming.context.home = new Farming.Buffalo().renderInto(document.getElementById("body"));
    },
    
    // show rabbit function
    showRabbit: function(e, s) {
        Farming.context.home = new Farming.Rabbit().renderInto(document.getElementById("body"));
    },
});