/* Player.js */

 export class Player {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(name) {
        // Model
        this.name = name;
        this.money = 0; // _underscore remeber plater case l:188 board.js
        this._money = null;
        this.position = null;
        this.display = this.moneyDisplay();
        // View
        this.elem = this._createView();  // <div> element
    }
    
     
    get moneyDisplay() {
        //player display upfdate
        return this._money;
    }
    
    set moneyDisplay(value) {
       
        this._money = value;
        
    }
     
    _createView() {
//        var brake = $('</br>');
        var elem = $('<div>')
            .attr('id', this.name)
            .addClass('player')
            .html('<p><b>'+this.name+'</b><br>'+this.display+'</p>');
  
        return elem;
    }
     
    

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------
     
    

}