/* App.js */

import { Board } from './Board.js';
import { Player } from './Player.js';
//import { Block } from './Block.js';
import { Gold   } from './Gold.js';


 export class App {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(divId, boardSize) {
        // Declare properties
        this.board = null;  // JS obj
        this.elem = null;  // app <div>

        // Do initialization
        this._initBoard(divId, boardSize);
        this._initBlock();
//        this._initGold();
//        this._initPlayer();
        this._initSetup();
        
        
    }

    _initBoard(divId, boardSize) {
        // Create board obj
        this.board = new Board(boardSize);

        // Create app <div> and append board element
        this.elem = $('<div>')
            .attr('id', 'pac man board')
            .append(this.board.elem); // createView method board.js l:34
        
        // Finally, append app <div> to caller's <div>
        // (Only modify DOM once; see NOTES for explanation.)
        $('#'+divId).append(this.elem);
    }
     
     _initBlock() {
         let b = true;
        this.board.addBlock(b); 
    } 
     
//    _initGold() {
//        let g = new Gold();
//        this.board.addGold();
////    }
//
//    _initPlayer() {
//        let p = new Player('Pac_man');
//        this.board.addPlayer(p);
//    }

    

    _initSetup() {
        let visitCount = 1;
        const visitLimit = 5;

        for (let i=0; i<5; i++) {
//            await this._pause(1000);  // wait a moment...
//            this.board.movePlayer();
            this.board.addBlock();
            console.log('while 1')
//            visitCount++; // Player instance 
        }
        
//        while (visitCount <= visitLimit) {
////            await this._pause(1000);  // wait a moment...
////            this.board.movePlayer();
//            this.board.addGold();
//            visitCount++; // Player instance 
//        }
    }

    async _pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}