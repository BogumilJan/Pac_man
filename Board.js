/* Board.js */

import { Square } from './Square.js';



export class Board {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(size) {
        this.size = size;
        this.position = { row: -1, col: -1 };// player's position (row/col)
        this.blockPosition = { row: -1, col: -1 };
        this.goldPosition = { row: -1, col: -1 };

        this.model = this._createModel();  // a 2-dim array of Square objs
        this.elem = this._createView();  // a <table> elem
    }

    _createModel() {
        var model = [];  // model[2][3] is row 3, column 4 (since first row is 0)

        for (let r=0; r<this.size; r++) {
            model.push( [] );  // start a new row
            for ( let c=0; c<this.size; c++) {
                model[r].push( new Square(r, c) );  // push a new Square on current row
            }
        }

        return model;
    }

    _createView() {
        let tableElem = $('<table>');

        for (let r=0; r<this.size; r++) {
            let trElem = $('<tr>');

            for (let c=0; c<this.size; c++) {
                let sq = this.getSquare(r, c);
                $(trElem).append(sq.elem);  // append the square's view (a <td> elem) l:24
            }

            $(tableElem).append(trElem);  // append the <tr> to <table>
        }

        return tableElem;
    }

    // ------------------------------------------------------------------------
    // Squares
    // ------------------------------------------------------------------------

    getSquare(row, col) {
        return this.model[row][col];
    }

    _getRandomPosition() {
        let r = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        return { row: r, col: c };
    }

    // ------------------------------------------------------------------------
    // Player
    // ------------------------------------------------------------------------
    addBlock(b) {
        // The board's empty; all squares are available
        
        let pos = this._getRandomPosition(); 
        let sq = this.getSquare(pos.row, pos.col);
        while(sq.visited && sq._block) {
            let pos = this._getRandomPosition(); 
            let sq = this.getSquare(pos.row, pos.col);
        }
        sq.block = b;
        this.blockPosition = pos;
    }
    
    setBlocks() {
        
    }
    
//    addGold() {
//        
//        let pos = this._getRandomPosition(); 
//        let sq = this.getSquare(pos.row, pos.col);
//        while(sq.visited) {
//            let pos = this._getRandomPosition(); 
//            let sq = this.getSquare(pos.row, pos.col);
//        }
//        sq.gold = true;
//        this.goldPosition = pos;
//    }
//
//    addPlayer(p) {  // p argument => new Player instance name - julio
//        
//        let pos = this._getRandomPosition();
//        let sq = this.getSquare(pos.row, pos.col); // random square
//        sq.player = p; // square instance (initPlayer from App.js)
//        this.position = pos; //player position
//    }
//
//    movePlayer() {
//        // Remove player from current square
//        let sq = this.getSquare(this.position.row, this.position.col); // player position (random position passed in addPlayer method)) l:75
//        
//        let p = sq.player; // reading getter
//        sq.player = null;  // sets sq to 'visited' remove player from square writting setter
//
//        // Find an unvisited square
//        let pos = this._getRandomPosition();
//        sq = this.getSquare(pos.row, pos.col);
//        while (sq.visited) {
//            pos = this._getRandomPosition();
//            sq = this.getSquare(pos.row, pos.col);
//        }
//
//        // Add player to the square and update position
//        sq.player = p;
//        this.position = pos;
//    }
//    
    

}