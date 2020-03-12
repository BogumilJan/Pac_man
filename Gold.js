/* Gold.js */

 export class Gold {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(random) {
        // Model
//        this.name = name;
        this.money = this._money;
        this.price = `${this.money}£`;
        this.option = random;
        this.test = this._moneyGrabber();
        this.position = null;
        // View
        this.elem = this._createView();  // <div> element
        // 
    }
    
    _moneyGrabber() {
       return this.money; 
    } 
    
    
    _money() {
        let value = Math.floor(Math.random() * 10);
            this.goldValue = value * 100;
            $('#'+this.id).addClass('goldcss').text(`${value}£`);
    }
     
    _createView() {

        var elem = $('<div>')
            .attr('id', this.price)
            .addClass('goldcss')
            .html('<p><b>'+this.name+'</b><br>'+this.test+'</p>');
        
        return elem;
    }
     
     
 }

//        elem.click(function() {
//            console.log('player click');
//            console.log(this.name); // Why this.name doesnt work here? It works above! });
            