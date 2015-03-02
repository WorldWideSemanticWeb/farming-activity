// List of all crops
enyo.kind({
    name: "Farming.SweetPotatoes",
    kind: "FittableRows", 
    classes: "enyo-list",
    components: [
      { kind: "Farming.Header" },
      {   
          name: "appList", 
          kind: "List", 
          fit:true, 
          count:0, 
          touch:true, 
          onSetupItem: "setupItem", 
          components: [
              { 
                kind: "FittableColumns",
                components: [
                    {
                        name: "imageSource",
                        kind: "Image",
                        classes: "list-image",
                        src: "Set Source...",
                    },
                    {
                        name: "listItem", 
                        classes:'listItemContainer', 
                        ontap:'listItemTapped', 
                        components: [
                            {
                                name: "itemTitle",  
                                content:"Set Title..."
                            } 
                        ]
                    }
                ]
              },
          ]
      },
    ],    
    create: function(){
	this.inherited(arguments);
	this.$.appList.setCount(sweetpotatoes.length);
    },
    setupItem: function(inSender,inEvent) {
       //During the iteration of setupItem, this event will create inEvent.index which is
       //assigned automatically. inEvent.index is very useful, to map array index of datasource later.
 
       //In enyo, this.variableName is the same as to var a variable. Only difference is they remained
       //within the closure.
       this.crop = sweetpotatoes[inEvent.index].crop;
       this.disease = sweetpotatoes[inEvent.index].disease;
       this.id = sweetpotatoes[inEvent.index].identification;
       this.management = sweetpotatoes[inEvent.index].management;
       this.photos = sweetpotatoes[inEvent.index].src;
       // this.$.itemTitle.setContent(this.id);
       // Yup, as simple as assigning properties.
       this.$.itemTitle.setContent(this.disease+"\n"+": "+this.id);
       this.$.imageSource.setSrc(this.photos);
    },
    listItemTapped: function(inSender,inEvent){
       //Best practice you should always refer your index with the ones in memory.
       //Reason being, list can be highly dynamic and some can be sorted and filtered search.
       //Always try to referred the index with the ones in the memory.
       alert("Management of "+this.disease+":\n\n"+this.management);
    }
});