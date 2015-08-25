var chessboard =		[[null, null, null, null, null, null, null, null],
             	         [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null],
                    	 [null, null, null, null, null, null, null, null]];



var Piece = function(type, image, startingPosition) {
    this.type = type;
    this.image = image;
    this.startingPosition = startingPosition;
    this.location = startingPosition;
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
            
            }

        });
    }
    this.placePiece(this.startingPosition);
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

new Piece("pawn", "White-Pawn.svg", "sqr-2-a");
new Piece("pawn", "White-Pawn.svg", "sqr-2-b");
new Piece("pawn", "White-Pawn.svg", "sqr-2-c");
new Piece("pawn", "White-Pawn.svg", "sqr-2-d");
new Piece("pawn", "White-Pawn.svg", "sqr-2-e");
new Piece("pawn", "White-Pawn.svg", "sqr-2-f");
new Piece("pawn", "White-Pawn.svg", "sqr-2-g");
new Piece("pawn", "White-Pawn.svg", "sqr-2-h");

new Piece("rook", "White-Rook.svg", "sqr-1-a");
new Piece("rook", "White-Rook.svg", "sqr-1-h");


new Piece("knight", "White-Knight.svg", "sqr-1-b");
new Piece("knight", "White-Knight.svg", "sqr-1-g");

new Piece("bishop", "White-Bishop.svg", "sqr-1-c");
new Piece("bishop", "White-Bishop.svg", "sqr-1-f");

new Piece("king", "White-King.svg", "sqr-1-e");
new Piece("queen", "White-Queen.svg", "sqr-1-d");

new Piece("pawn", "Black-Pawn.svg", "sqr-7-a");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-b");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-c");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-d");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-e");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-f");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-g");
new Piece("pawn", "Black-Pawn.svg", "sqr-7-h");

new Piece("rook", "Black-Rook.svg", "sqr-8-a");
new Piece("rook", "Black-Rook.svg", "sqr-8-h");


new Piece("knight", "Black-Knight.svg", "sqr-8-b");
new Piece("knight", "Black-Knight.svg", "sqr-8-g");

new Piece("bishop", "Black-Bishop.svg", "sqr-8-c");
new Piece("bishop", "Black-Bishop.svg", "sqr-8-f");

new Piece("king", "Black-King.svg", "sqr-8-e");
new Piece("queen", "Black-Queen.svg", "sqr-8-d");







