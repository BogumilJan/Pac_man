/*Gold.js*/




 export class Gold {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor() {
        // Model
        this.squareGold = false;
        this.visitCount = 0;

        // View
        this.elem = this._createView();  // <div> element
    }

    _createView() {
        var elem = $('<div>')
            .attr('id', 'gold')
            .addClass('gold').text('Gold');
        
        return elem;
    }

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------

    incrVisitCount() {
        // Model
        this.visitCount++;

        // View
        
    }

}