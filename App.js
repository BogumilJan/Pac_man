/* App.js */

import { Board } from './Board.js';
import { Player } from './Player.js';
//import { Block } from './Block.js';
//import { Gold   } from './Gold.js';


 export class App {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(divId, boardSize) {
        // Declaring properties
        this.board = null;  // JS obj
        this.elem = null;  // app <div>
        this.player = this._playerName();
        
        // Initialization
        this._initBoard(divId, boardSize);
        this._initBlock();
        this._initGold();
        this._initPlayer();
      
    }

    _initBoard(divId, boardSize) {
        // Board object
            this.board = new Board(boardSize);
            this.elem = $('<div>')
            .attr('id', 'pac_man_board')
            .append(this.board.elem); 
        
            $('#'+divId).append(this.elem);
    }
     
     _playerName() {
            var p = new Player('Pacman');
            return p;
    }
     
     _initBlock() {
         let b = true;
        for (let i=0; i<5; i++) {
            this.board.addBlock(b);
        }
    } 
     
    _initGold() {
       
        let g = true;
        for (let i=0; i<5; i++) {
            this.board.addGold(g);
        }
    }

    _initPlayer() {
        let p = this.player;
            this.board.addPlayer(p);
    }
     
}