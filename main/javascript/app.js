var chessboard =		[[null, null, null, null, null, null, null, null],
             	         [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null]];
//to do: don't hardcode the pawn moves
var currentPlayer = "white"
$("#sqr-8-a").click(function() {
    return [7, 0];
})
    
var Piece = function(type, image, startingPosition, color, living) {
    var self = this;
    this.color = color;
    this.type = type;
    this.image = image;
    this.startingPosition = startingPosition;
    this.location = startingPosition;
    this.selected = false;
    this.living = true;
    this.placePiece = function(location) {
        var origin = $('#'+this.location);
        origin.empty();
        var originCoordinates = getBoardCoordinates(this.location);
        var originRow = originCoordinates[0];
        var originColumn = originCoordinates[1];
        chessboard[originRow][originColumn] = null;
        //this places the piece in the new location//
        var targetCoordinates = getBoardCoordinates(location);
        var targetRow = targetCoordinates[0];
        var targetColumn = targetCoordinates[1];
        chessboard[targetRow][targetColumn] = this;
        var target = $('#'+location);
        var pieceImage = $('<img style="width:65px;height:65px;">');
        pieceImage.attr('src', 'chess pieces/' + this.image);
        target.append(pieceImage);
        this.location = location;
        //put a click listener to link to pieceImage//
        var self = this;
        this.type
        pieceImage.click(function(){
        //write a function to get board coordinates in a [row,column] form.//
        //Similar to what I did in the placePiece function with var originCoordinates.//
                    var pos = self.location;
                    console.log(self);
                    //code goes here//
            var originCoordinates = getBoardCoordinates(self.location);
            var originRow = originCoordinates[0];
            var originColumn = originCoordinates[1];                    
            switch(self.type) {
                //add case 'knight' here and make it work
                case 'knight':
                    console.log(originCoordinates);
                    var possiblities = knightMove(originRow,originColumn);
                    console.log(possiblities);
                    break;
                //add case 'rook' here and make it work
                case 'rook':
                    console.log(originCoordinates);
                    var possiblities = rookMove(originRow,originColumn);
                    console.log(possiblities);
                    break;                
                //add case 'queen' here and make it work
                case 'queen':
                    console.log(originCoordinates);
                    var possiblities = queenMove(originRow,originColumn);
                    console.log(possiblities);
                    break;
                //add case 'king' here and make it work
                case 'king':
                    console.log(originCoordinates);
                    var possiblities = kingMove(originRow,originColumn);
                    console.log(possiblities);
                    break;
                //add case 'bishop' here and make it work
                case 'bishop':
                    console.log(originCoordinates);
                    var possiblities = bishopMove(originRow,originColumn);
                    console.log(possiblities);
                    break;  
                //add case 'pawn' here and make it work
                case 'pawn':
                    console.log(originCoordinates);
                    var possiblities = pawnMove(originRow,originColumn);
                    console.log(possiblities);
                    break;
            }

            console.log("possIds");
            var moves = getGridId(possiblities);
            $(".option").removeClass("option");
            for(i = 0; i<moves.length; i ++){
                var id = moves[i];
                console.log("id:" + id);
                console.log(self.color);
                if(!checkForAlly(self.color, id)){
                    $("#" + id).addClass("option");
                    console.log($("#" + id));
                }
            }
            $(".option").click(function() {
                var clickedOption = getBoardCoordinates($(this).attr("id"));
                var originalPosition = originCoordinates;

                target.empty();
                $(this).append(pieceImage);
            });

        });


            
    }
    this.placePiece(this.startingPosition);

    this.moveDOMPiece = function() {

    }

    this.moveArrayPiece = function() {

    }
}

function checkForAlly(myColor, id) {
   var coord = getBoardCoordinates(id);
   var x =chessboard[coord[0]][coord[1]];
   if(x != null && x.color == myColor){
    console.log('ally! ' + id);
    return true;
   } else {
    console.log('not an ally');
   }
} 

function getBoardCoordinates(location) {
    var locationparts = location.split("-");
    var row = Number(locationparts[1])-1;
    var column = locationparts[2];
    switch(column) {
        case 'a':
            column = 0
            break;
        case 'b':
            column = 1
            break;
        case 'c':
            column = 2
            break;
        case 'd':
            column = 3
            break;
        case 'e':
            column = 4
            break;
        case 'f':
            column = 5
            break;
        case 'g':
            column = 6
            break;
        case 'h':
            column = 7
            break;
    }
    return [row,column];  


}

function getGridId(coordinates){
    var possIds = [];
    for(var i = 0;i< coordinates.length;i ++){
        var row = coordinates[i][0]+1;
        var column = coordinates [i][1];
        //ToDo:construct string corresponding to DOM elm id on board
        switch(column) {
            case 0:
                column = "a"
                break;
            case 1:
                column = "b"
                break;
            case 2:
                column = "c"
                break;
            case 3:
                column = "d"
                break;
            case 4:
                column = "e"
                break;
            case 5:
                column = "f"
                break;
            case 6:
                column = "g"
                break;
            case 7:
                column = "h"
                break;
        }    
        possIds.push("sqr"+ "-" + row + "-" + column);
    }
    
    return possIds;
}

var Pawn1 = new Piece("pawn", "White-Pawn.svg", "sqr-2-a", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-b", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-c", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-d", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-e", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-f", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-g", "white");
new Piece("pawn", "White-Pawn.svg", "sqr-2-h", "white");

new Piece("rook", "White-Rook.svg", "sqr-1-a", "white");
new Piece("rook", "White-Rook.svg", "sqr-1-h", "white");


new Piece("knight", "White-Knight.svg", "sqr-1-b", "white");
new Piece("knight", "White-Knight.svg", "sqr-1-g", "white");

new Piece("bishop", "White-Bishop.svg", "sqr-1-c", "white");
new Piece("bishop", "White-Bishop.svg", "sqr-1-f", "white");

new Piece("king", "White-King.svg", "sqr-1-e", "white");
new Piece("queen", "White-Queen.svg", "sqr-1-d", "white");

new Piece("pawn", "Black-Pawn.svg", "sqr-7-a", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-b", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-c", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-d", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-e", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-f", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-g", "black");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-h", "black");

new Piece("rook", "Black-Rook.svg", "sqr-8-a", "black");
new Piece("rook", "Black-Rook.svg", "sqr-8-h", "black");


new Piece("knight", "Black-Knight.svg", "sqr-8-b", "black");
new Piece("knight", "Black-Knight.svg", "sqr-8-g", "black");

new Piece("bishop", "Black-Bishop.svg", "sqr-8-c", "black");
new Piece("bishop", "Black-Bishop.svg", "sqr-8-f", "black");

new Piece("king", "Black-King.svg", "sqr-8-e", "black");
new Piece("queen", "Black-Queen.svg", "sqr-8-d", "black");

function pieceMove(){
    if(validCells===null){
    }
    else{

    }
}

function knightMove(row,column){
    var probableCells = [

        [row +2, column+1],
        [row-2, column+1],
        [row+2, column-1],
        [row-2, column-1],
        [row+1, column+2],
        [row-1, column+2],
        [row+1, column-2],
        [row-1, column+2]

    ];

    return validCells(probableCells);
}

function bishopMove(row,column){
    var probableCells = diagonalMoves(row,column);
    return validCells(probableCells);
}

function diagonalMoves(row,column){
    var diagonals = [];
    var forwardRows = 7 - row;
    var backwardRows = row;
    
    //do what you did to the for loops in straightMoves here 
    for(var i = 1; i <= forwardRows; i++){
        var left = [row + i, column -i];
        if(ocupado(chessboard[row +i][column -i])){
            if(ocupado(chessboard[row +i][column -i])!=currentPlayer){
                diagonals.push(left);
            }
            break;
        }
        else{
            diagonals.push(left);
        }
    }

    for(var i = 1; i <= forwardRows; i++){    
        var right = [row + i, column + i];
        if(ocupado(chessboard[row +i][column +i])){
            if(ocupado(chessboard[row +i][column +i])!=currentPlayer){
                diagonals.push(right);
            }
            break;
        }
        else{
            diagonals.push(right);
        }
    }

    for(var i = 1; i <= backwardRows; i++){
        var left = [row - i, column - i];
        if(ocupado(chessboard[row -i][column -i])){
            if(ocupado(chessboard[row -i][column -i])!=currentPlayer){
                diagonals.push(left);
            }
            break;
        }
        else{
            diagonals.push(left);
        }
    }

    for(var i = 1; i <= backwardRows; i++){
        var right = [row - i, column + i];
        if(ocupado(chessboard[row -i][column +i])){
            if(ocupado(chessboard[row -i][column +i])!=currentPlayer){
                diagonals.push(right);
            }
            break;
        }
        else{
            diagonals.push(right);
        }
    }
    
    return diagonals;
    
}



function rookMove(row,column){
    var probableCells = straightMoves(row,column);
    return validCells(probableCells);
}

function kingMove(row,column){
    var probableCells = [

        [row +1, column],
        [row -1, column],
        [row, column + 1],
        [row, column - 1],
        [row +1, column - 1],
        [row +1, column + 1],
        [row -1, column - 1],
        [row -1, column + 1]



    ];
    return validCells(probableCells);
}

function queenMove(row,column){
    var probableCellsOne = bishopMove(row,column);
    var probableCellsTwo = rookMove(row,column);
    return probableCellsOne.concat(probableCellsTwo);
}

function ocupado(cell){
    if(cell == null){
        return null;
    }
    else{
        return cell.color;
    }

}

function pawnMove(row,column){
    var spaces = [];
    if(currentPlayer == "white"){
        spaces.push([row +1, column]);
        if(row ==1){
            spaces.push([row +2,column]);
        }
        if(ocupado(chessboard[row +1][column -1])=="black"){
            spaces.push([row +1][column -1]);
        }
        if(ocupado(chessboard[row +1][column +1])=="black"){
            spaces.push([row +1][column +1]);
        }
    }
    else{
        spaces.push([row -1,column]);
        if(row ==6){
            spaces.push([row -2,column]);
        }
        if(ocupado(chessboard[row -1][column -1])=="white"){
            spaces.push([row -1][column -1]);
        }
        if(ocupado(chessboard[row -1][column +1])=="white"){
            spaces.push([row -1][column +1]);
        }
    }
    return validCells(spaces);
}


function straightMoves(row,column){
//function straightMoves(number){
    //make this function work with the click
    var spaces = [];
    // for (i = number-1; i >= 0; i--){
    //     spaces.push(i);
        
    // }
    // for (i = number+1; i <= 7; i++){
    //     spaces.push(i);
    //     console.log(spaces);
    //}
    var maxForward = 7 - row;
    var maxBackward = row;
    var maxRight = 7 - column;
    var maxLeft = column;
    for(var i=1; i<=maxForward; i++){
        var space = [row + i, column];
        if(ocupado(chessboard[row +i][column])){
            if(ocupado(chessboard[row +i][column])!=currentPlayer){
                spaces.push(space);
            }
            break;
        }
        else {
            spaces.push(space);
        }
    }
    for(var i=1; i<=maxBackward; i++){
        var space = [row - i, column];
        if(ocupado(chessboard[row -i][column])){
            if(ocupado(chessboard[row -i][column])!=currentPlayer){
                spaces.push(space);
            }
            break;
        }
        else {
            spaces.push(space);
        }
    }

    for(var i=1; i<=maxRight; i++){
        var space = [row, column +i];
        if(ocupado(chessboard[row][column +i])){
            if(ocupado(chessboard[row][column +i])!=currentPlayer){
                spaces.push(space);
            }
            break;
        }
        else {
            spaces.push(space);
        }
    }
    
    for(var i=1; i<=maxLeft; i++){
        var space = [row, column - i];
        if(ocupado(chessboard[row][column -i])){
            if(ocupado(chessboard[row][column -i])!=currentPlayer){
                spaces.push(space);
            }
            break;
        }
        else{
            spaces.push(space);
        }
    }
    return spaces;
}

function validCells(probabilities) {
    var possibleCells = [];

    for(i=0;i < probabilities.length;i ++) {
        if(checkBounds(probabilities[i])){
            possibleCells.push(probabilities[i]);
        }
    }
    return possibleCells;
}

function checkBounds(coordinates){
    if(checkRange(coordinates[0]) && checkRange(coordinates[1])) {
        return true;
    }
}

function checkRange(number){
    if(number >= 0 && number <= 7){
        return true;
    }
}




