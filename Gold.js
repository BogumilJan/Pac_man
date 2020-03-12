/* Gold.js */

 export class Gold {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(money) {
        // Model
//        this.name = name;
        this.money = money;
        this.price = `${money}£`;
        this.test = this._moneyGrabber();
        this.position = null;
        // View
        this.elem = this._createView();  // <div> element
    }
    
    _moneyGrabber() {
       return this.money; 
    } 
    
    _createView() {

        var elem = $('<div>')
            .attr('id', this.price)
            .addClass('goldcss')
            .html('<p><b>'+this.name+'</b><br>'+this.test+'</p>');
  
//        elem.click(function() {
//            console.log('player click');
//            console.log(this.name); // Why this.name doesnt work here? It works above! });
            
        
        
        return elem;
    }
     
    

    

}