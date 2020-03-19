/* Board.js */

import { Square } from './Square.js';
import { Player } from './Player.js';


export class Board {

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    constructor(size) {
        this.size = size;
        this.position = {row: -1, col: -1};// player's position (row/col)
        this.model = this._createModel();  // a 2-dim array of Square objs
        this.elem = this._createView();  // a <table> elem
        this.player = null;
        this.clickCol = 0;
        this.blockObjArray = [];
        this.gold = null;
        this.goldObjArray = [];
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
                $(trElem).append(sq.elem);
            }
            
        $(tableElem).append(trElem);  
        }
        
/*Player control click event function *******************************/
        
        let board = this;
        let playerPos = this.player;
        $(tableElem).click(function(event) {
            let clickId = event.target.id;
            let arrayId = clickId.split('');
            let pos = {
                row: Number(arrayId[3]), 
                col: Number(arrayId[5])
            };
//            let squareObject = event.currentTarget; 
//            console.log(squareObject);
            let gold = this.gold;
//            if (board._checkBlock(pos)) {
//                if(board._checkGold(pos)) {
                    if(board._checkValidMove(pos)) {
                        board._movePlayer(pos);
                        }
//                    }
//                }
            
            
//            else(board._checkOtherObjects(gold)) {
//                board._movePlayer(pos);
//            }
        });
        
        return tableElem;
    }
    
/*Squares methods **************************************************/    
     

    getSquare(row, col) {
        
        return this.model[row][col];
    }

    _getRandomPosition() {
        
        let r = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        return { row: r, col: c };
    }


    addBlock(b) {
        
        let pos = this._getRandomPosition(); 
        let sq = this.getSquare(pos.row, pos.col);
        while(sq._block) {
            pos = this._getRandomPosition(); 
            sq = this.getSquare(pos.row, pos.col);
        }
        sq.block = b;
        this.blockObjArray.push(sq.location);
        console.log(this.blockObjArray)
    }
    
    addGold(g) {
        
        let pos = this._getRandomPosition(); 
        let sq = this.getSquare(pos.row, pos.col);
        while(sq._block || sq._gold) {
            pos = this._getRandomPosition(); 
            sq = this.getSquare(pos.row, pos.col);
        }
        sq.gold = g;
        this.gold = g;
        let goldObjectId = sq.id;
        g.id = goldObjectId;
        this.goldObjArray.push(sq.location);
        console.log(this.goldObjArray);
    }

    addPlayer(p) { 
        
        let pos = this._getRandomPosition();          
        let sq = this.getSquare(pos.row, pos.col); 
        while(sq._block || sq._gold) {
            pos = this._getRandomPosition(); 
            sq = this.getSquare(pos.row, pos.col);
        }
        let playerObj = p;  
        sq.player = playerObj;
        this.position = pos;                                 
        this.player = playerObj;
//        console.log(this.gold);
    }
    
    _checkBlock(blockClick) {
        let blockArray = this.blockObjArray;
        let validation = null;
//        console.log(blockArray);
        for (let i=0; i<5; i++) {
            if(blockArray[i] == blockClick) {
                console.log(blockArray[i]);
                validation = false;
//           } else {
//                return true;
           }
        }
       return validation; 
    }
    
    _checkGold(goldClick) {
        let goldArray = this.goldObjArray;
        let validation = true;
        console.log(goldArray);
        for (let i=0; i<5; i++) {
            if(goldArray[i] == goldClick) {
                console.log(goldArray[i]);
                validation = true;
           }
        }
        return validation;
    }
                                                                 
    _checkValidMove(pos) {
        
        let clickLocation = pos;           
        let playerLocation = this.position;
        let plsq = this.getSquare(playerLocation.row, playerLocation.col);
        let plObj = this.player;
        let goldObj = this.gold;
        console.log(pos.row + ' testing valid move');
//        let clsq = this.getSquare(pos.row, pos.col);
        let clElem = goldObj.position;
//        console.log(clickIdString);
        let clBlock = 0;
        let clRow = clickLocation.row;
        let clRowUp = clickLocation.row + 1;
        let clRowDown = clickLocation.row - 1;
        let clCol = clickLocation.col;
        let clColLeft = clickLocation.col + 1;
        let clColRight = clickLocation.col - 1;
        let plRow = playerLocation.row;
        let plCol = playerLocation.col;
        let playerGo = null;    
        
/*Vertical movement verification logic ****************************************/
        
        // Gold function 
        var board = this;
        function blockValid() {
            let blockArray = board.blockObjArray;
            let validation = true;
        console.log(blockArray[2]);
        console.log(clickLocation);
            for (let i=0; i<5; i++) {
                if(blockArray[i] === clickLocation) {
                    validation = false;
                    console.log(validation);
           }
        }
            return validation;
        }
        
        console.log(blockValid());
        
//        let blockArray = this.blockObjArray;
//            let validation = false;
//        for (let i=0; i<5; i++) {
//                if(blockArray[i] == clickLocation) {
////                console.log(blockArray[i]);
//                validation = true;
//           }
////        console.log(validation);
//        }
//        console.log(this.blockObjArray)
        
        if(blockValid()) {
        if(clRowUp == plRow && clCol == plCol) {
                playerGo = true;
            }
        if(clRowDown == plRow && clCol == plCol)  {
                playerGo = true;    
            }
        }    
        
/*Horizontal movement verification logic *************************************/  
        
        if(blockValid()) {
         if(clColLeft == plCol && clRow == plRow) {
                playerGo = true;
            }
        
        if(clColRight == plCol && clRow == plRow) {
                playerGo = true;    
            }
        
        }
        return playerGo;    
    }
    
    
    _movePlayer(click) {
        
//        console.log(click); // Working
        // Current Player position variables - before moving to click - new Player location 
        let plsqPos = this.position;
        let player = this.player;
        let rowPl = plsqPos.row;
        let colPl = plsqPos.col;
        // Current click position - new Player location
        let clsqPos = click;
        let rowCl = click.row;
        let colCl = click.col;
        
        let playerSq = this.getSquare(rowCl, colCl);
        playerSq.player = player;
        this.player = playerSq.player;
        this.position = clsqPos;
        
//        console.log(playerSq.gold);
//        console.log(player.test, player.money);
//        console.log(player.money);
//        playerSq.gold = 10;
        console.log(playerSq.gold); // getter
//        if(playerSq._gold) {
//           
//           }
   
    }
     
}


