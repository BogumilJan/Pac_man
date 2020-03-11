/* Player.js */

 export class Player {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(name) {
        // Model
//        this.id = 
        this.name = name;
        this.money = 0;
        this.position = null;


        // View
        this.elem = this._createView();  // <div> element
    }
    
    _createView() {
        var brake = $('</br>');
        var elem = $('<div>')
            .attr('id', this.name)
            .addClass('player')
            .html('<p><b>'+this.name+'</b><br>'+this.money+'</p>');
  
        elem.click(function() {
            console.log('player click');
            console.log(this.name); // Why this.name doesnt work here? It works above!
            
        })
        
        return elem;
    }
     
    
     
    

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------
     
    

}