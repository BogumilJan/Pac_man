/* Square.js */

import { Player } from './Player.js';
import { Gold } from './Gold.js';


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
        this.elem = this._createView();
        
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
//        console.log(p);
        
        // View
        if (p) {
            $('#'+this.id).append(p.elem);
            p.position = this.location; 
            
            //Question Jim !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            this._gold = null;
            this.gold = null;
            if(this.goldValue > 0) {
                p.money += this.goldValue;
                }
//            if (this._gold) {
//            p.money += this.goldValue;
//            }
        }
    }
 
    get block() {
         return this._block;
    }
    
    set block(b) {
            
        // Model
            this._block = b;
        
        // View
        if (b) {
            $('#'+this.id).addClass('blockcss');
        } 

    }
    
    get gold() {
        return this._gold;
    }
    
    set gold(g) {
        // Model
            this._gold = g;
        // View
        if (this._gold) {
            let value = Math.floor(Math.random() * 1000);
            this.goldValue = value;
            $('#'+this.id).addClass('goldcss').text(`${value}£`);
//            console.log(this.goldValue);
        } else {
            // Class removing 
        }
    }
}