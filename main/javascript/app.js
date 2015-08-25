var chessboard =		[[null, null, null, null, null, null, null, null],
             	         [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null]];


var Piece = function(color) {
    return {
        color : color,
        type : "Abstract",
        sayName : function sayName(){
            alert(this.type);
        },
        movePiece : function(oldPosition, newPosition){
        }
    };
}

var Pawn = function(color) {
    var pawn = Piece("Black");
    pawn.movePiece = function(oldPosition, newPosition) { 
        // pawn move here 
    };
    return pawn;
}