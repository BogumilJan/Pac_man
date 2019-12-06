/* Player.js */



 export class Player {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(name) {
        // Model
        this.name = name;
        this.visitCount = 0;

        // View
        this.elem = this._createView();  // <div> element
    }

    _createView() {
        var elem = $('<div>')
            .attr('id', this.name)
            .addClass('player');
        
        return elem;
    }

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------

    incrVisitCount() {
        // Model
        this.visitCount++;

        // View
        $(this.elem).html(this.name + '<br>' + this.visitCount);
    }

}