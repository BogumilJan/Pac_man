/* Player.js */

 export class Player {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(name) {
        // Model
        this.name = name;
        this.money = 0;
        this.test = this._moneyGrabber();
        this.position = null;
        // View
        this.elem = this._createView();  // <div> element
    }
    
    _moneyGrabber() {
       return this.money; 
    } 
    
    _createView() {
        var brake = $('</br>');
        var elem = $('<div>')
            .attr('id', this.name)
            .addClass('player')
            .html('<p><b>'+this.name+'</b><br>'+this.test+'</p>');
  
//        elem.click(function() {
//            console.log('player click');
//            console.log(this.name); // Why this.name doesnt work here? It works above! });
            
        
        
        return elem;
    }
     
    
     
    

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------
     
    

}