/* Gold.js */

 export class Gold {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(random) {
        // Model
//        this.name = name;
        this.id = '';
//        this.position = null;
        this.money = this._money;
        this.price = `${random}£`;
        this.option = random;
        this.test = null;
        this.position = null;
        // View
        this.elem = this._createView();  // <div> element
        // 
    }
    
    get idSetup() {

    } 
    
    
    set idSetup(id) {
        return ;
        
    }
     
    _createView() {

        var elem = $('<div>')
            .attr('id', this.price)
            .addClass('goldcss')
            .html('<p><b>'+this.price+'</b><br>'+this.id+'</p>');
//        console.log(this.price); Working
//        elem.click(function(event) {
//            console.log(event);
//        })
        
        return elem;
    }
     
     
 }

//        elem.click(function() {
//            console.log('player click');
//            console.log(this.name); // Why this.name doesnt work here? It works above! });
            