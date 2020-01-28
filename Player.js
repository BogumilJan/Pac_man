/* Player.js */

import { Board } from './Board.js';

 export class Player {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(name) {
        // Model
//        this.id = 
        this.name = name;


        // View
        this.elem = this._createView();  // <div> element
    }
     
     

    _createView() {
        var elem = $('<div>')
            .attr('id', this.name)
            .addClass('player').text(this.name);
        
        elem.click(function() {
            console.log('player click')
        })
        
        return elem;
    }
     
    

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------
     
     //ID - board location
     
     get boardId() {
         
         return this.id;
     }

//    incrVisitCount() {
//        // Model
//        
//
//        // View
//        $(this.elem).html(this.name + '<br>' + this.visitCount);
//    }

}
