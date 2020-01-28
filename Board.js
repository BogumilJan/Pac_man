/* Board.js */

import { Square } from './Square.js';



export class Board {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(size) {
        this.size = size;
        this.position = { row: -1, col: -1 };// player's position (row/col)
        this.model = this._createModel();  // a 2-dim array of Square objs
        this.elem = this._createView();  // a <table> elem
//        this.movePlayer();
    }

    _createModel() {
        var model = [];  // model[2][3] is row 3, column 4 (since first row is 0)

        for (let r=0; r<this.size; r++) {
            model.push( [] ); 
            for ( let c=0; c<this.size; c++) {
                model[r].push( new Square(r, c) );
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
        
        let pos = this._getRandomPosition(); 
        let sq = this.getSquare(pos.row, pos.col);
        while(sq._block) {
            pos = this._getRandomPosition(); 
            sq = this.getSquare(pos.row, pos.col);
        }
        sq.block = b;
    }
    
    addGold(g) {
        
        let pos = this._getRandomPosition(); 
        let sq = this.getSquare(pos.row, pos.col);
        while(sq._block || sq._gold) {
            pos = this._getRandomPosition(); 
            sq = this.getSquare(pos.row, pos.col);
        }
        sq.gold = g;
    }

    addPlayer(p) { 
        let pos = this._getRandomPosition();
        let sq = this.getSquare(pos.row, pos.col); 
        while(sq._block || sq._gold) {
            pos = this._getRandomPosition(); 
            sq = this.getSquare(pos.row, pos.col);
        }
        sq.player = p; 
        this.position = pos; //player position
        
    }
    
    
    
    movePlayer(p) {
        
        
        
        // if click is next to player change player sq value to null
        // click sq (parameter) turm to Player value
        
        /*
        
        check is it valid move (conditions met) 
        if not valid return
        move to player row, col
        if sq has gold remove from sq and add player
        
        */
        let pos = this.position;
        let sq = this.getSquare(pos.row, pos.col);
        sq.player = p;
        
        /*
            Left move
        */
        
        let sqL = this.getSquare(pos.row, pos.col-1);
        
//        sq.elem.click(function() {
//            sq.player = p;
//        })
           
        sqL.elem.click(function() {
            console.log(sqL);
//            let id = sqL.id;
//            sq.id = id;
            sqL.player = p;
            let test = sqL.col-1;
            sqL = this.getSquare(pos.row, test);
            console.log(test);
//            sqL.player = null;
        })
        
        
//        
//            if (sqL.click && !sqL.block) {
//                sq.id = sqL.id;
//                sq.player = p;
//            }
//        
            
        }
        
    }



//let sq = this.getSquare(this.position.row, this.position.col); 
//        
////        console.log(sq);
//        
//        let p = sq.player;
//        
//        let hor = sq._horizontalPos;
//        let ver = sq._verticalPos;
//        
//        let sqL = this.getSquare(this.position.row, this.position.col-1);
//        
////        console.log(sqL);
//        
//        let sqR = this.getSquare(this.position.row, this.position.col+1);
//        
//        let sqU = this.getSquare(this.position.row+1, this.position.col);
//        
//        let sqD = this.getSquare(this.position.row-1, this.position.col);
//        
//        
//        
//        if (sqL._horizontalPos == hor) {
//            $('#'+sqL.id).on('click', function() {
//                sq._player = null;
//                sqL.player = p;
//            })
//        }
//      
//        if (sqR._hotizontalPos == hor) {
//            $('#'+sqR.id).on('click', function() {
//                sq._player = null;
//                sqR.player = p;
//            })
//        }
//        
////        if (sqU._hotizontalPos = ver) {
////            $('#'+sqU.id).on('click', function() {
////                sq._player = null;
////                sqU._player = p;
////            })
////        }
////        
////        if (sqD._hotizontalPos = ver) {
////            $('#'+sqD.id).on('click', function() {
////                sq._player = null;
////                sqD._player = p;
////            })
////        }
//            
//    
//                     // reading getter
//            //        sq.player = null;  
//
//
//                    // Add player to the square and update position
//            //        sq.player = p;
//            //        this.position = pos;
//    
    
    

