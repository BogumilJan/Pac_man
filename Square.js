/* Square.js */

import { Player } from './Player.js';



export class Square {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(row, col) { //pass board as an argument !!!!! 
        // Model
        this.id = `sq_${row}_${col}`; 
        this.location = {row: row, col: col};
        this._player = null;
        this._block = null;
        this._gold = null;
        this.col = col;
        this.row = row;
        this.goldValue = 0;
        
        // View
        this.elem = this._createView();
//        this._onclick();
    }

    
    _onclick() {
        
      this.elem.click(function() {
//            this._player = p;
            console.log(this.board.position);
       })
                   
    }
    

    _createView() { 
        
        let elem = $('<td>')
            .attr('id', this.id);
        
        return elem;
    }

    // ------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------

    get player() {
        return this._player;
    }

    set player(p) {
        // Model
        
        this._player = p;
        console.log(p);
        

        // View
        if (p) {
            $('#'+this.id).append(p.elem);
            if (this._gold) {
            let gold = p.money;
            p.money = gold + this.goldValue;
            }
        }
        
        // append the player's view to the square's view
//        else {
//            $('#'+this.id)
//                .empty()  // remove the player view
//                .addClass('visited')
//                .text(this.visitNum);
//        }
    }
 
    get block() {
         return this._block;
    }
    
    set block(b) {
            
        // Model
            this._block = true;
//            this.visited = true;
        
        // View
        if (b) {
            $('#'+this.id).addClass('blockcss');
        } 
//            
//        this._block = b;
//        
//        // View
//        if (b) {
//            $('#'+this.id).append(b.elem);
//            $('#'+this.id).addClass('blockcss');
//        } else {
//            $('#'+this.id).empty();
//            $('#'+this.id).addClass('blockcss');
//        }
    }
    
    get gold() {
        return this._gold;
    }
    
    set gold(g) {
        // Model
            this._gold = true;
        // View
        if (g) {
            let value = Math.floor(Math.random() * 1000);
            this.goldValue = value;
            $('#'+this.id).addClass('goldcss').text(`${value}£`);
//            console.log(this.goldValue);
        }
    }
}