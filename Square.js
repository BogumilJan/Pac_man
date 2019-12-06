/* Square.js */

import { Player } from './Player.js';
import { Block  } from './Block.js';
import { Gold   } from './Gold.js';



export class Square {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(row, col) {
        // Model
        this.id = `sq_${row}_${col}`; // use backticks!!!!!!!!! 
        this._player = null;
        this.visited = false;
        this.visitNum = 0;
        this._block = null;
        this._gold = null;

        // View
        this.elem = this._createView();
    }

    _createView() { // private methods and properties should be used 
        let elem = $('<td>')
            .attr('id', this.id).text(`${this.id}`);
        
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
        if (p) {
            p.incrVisitCount();
        } else {
            this.visited = true;
            this.visitNum = this._player.visitCount;
        }
        this._player = p;

        // View
        if (p) {
            $('#'+this.id).append(p.elem);  // append the player's view to the square's view
        } else {
            $('#'+this.id)
                .empty()  // remove the player view
                .addClass('visited')
                .text(this.visitNum);
        }
    }

    get block() {
         return this._block;
    }
    
    set block(b) {
            
        // Model
            this._block = true;
            this.visited = true;
        
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
        if (g) {
            this.visited = true;
            g.squareGold = true;
            
        } 
        this._gold = g;
        
        // View
        if (g) {
            $('#'+this.id).append(g.elem);
            $('#'+this.id).addClass('goldcss');
        } else {
            $('#'+this.id).empty();
            $('#'+this.id).addClass('goldcss');
        }
    }
}