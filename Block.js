/*Block.js*/




 export class Block {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor() {
        // Model
        this.squareBlock = false;
        this.visitCount = 0;

        // View
        this.elem = this._createView();  // <div> element
    }

    _createView() {
        var elem = $('<div>')
            .attr('id', 'block')
            .addClass('block');
        
        return elem;
    }

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------

    incrVisitCount() {
        // Model
        this.visitCount++;

        // View
        $(this.elem).text('Block');
    }

}