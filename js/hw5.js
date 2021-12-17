/*
GUI Assignment: Creating a scrabble game
Joshua Hou
12/16/21

An incomplete drag and drop scrabble game.
What I did complete - Draggable feature, UI, reset button, and getting the jQuery to place
the tiles on the image. I did not complete the score or droppable features, errors, submit features for the
next rounds and so on. There is alot of errors in here, such as when you drag it does not go back unless
you refresh.

website: https://hourzn.github.io/

Sources from: StackOverflow, W3Schools, jQueryUI, and youtube.

*/
// generate random tiles from char array.
$(document).ready(function () {
    $(function () {
        
    });
    var rackRows = 8;
    for (var i = 0; i < rackRows; i++) {
    var randomTile = default_tiles[Math.floor(Math.random() * default_tiles.length)];
    $(`#placeTile${i}`).append(`<img id='placeTile${i}' src='tiles/Scrabble_Tile_` + randomTile + ".jpg'/>");
    }
});
// clear and regenerate random tiles from char array.
function reset() {
  var rackRows = 8;
  for(let i = 1; i < 8; i++){
    $(`#placeTile${i}`).empty();
}
    for (var i = 0; i < rackRows; i++) {
      var randomTile = default_tiles[Math.floor(Math.random() * default_tiles.length)];
    $(`#placeTile${i}`).append("<img id='placeTile' src='tiles/Scrabble_Tile_" + randomTile + ".jpg'/>");
    }
}
// make class draggable
$( ".placeTile" ).draggable({
  classes: {
    "ui-draggable": "move"
  }
});

// my array

var default_tiles = ["A", "A", "A", "A", "A", "A", "A", "A", "A",
"B", "B", "C", "C", "D", "D", "D", "D", "E",
"E", "E", "E", "E", "E", "E", "E", "E", "E",
"E", "E", "F", "F", "G", "G", "G", "H", "H",
"I", "I", "I", "I", "I", "I", "I", "I", "I",
"J", "K", "L", "L", "L", "L", "M", "M", "N",
"N", "N", "N", "N", "N", "O", "O", "O", "O",
"O", "O", "O", "O", "P", "P", "Q", "R", "R",
"R", "R", "R", "R", "S", "S", "S", "S", "T",
"T", "T", "T", "T", "T", "U", "U", "U", "U",
"V", "V", "W", "W", "X", "Y", "Y", "Z", "Blank",
"Blank"
] ;

var ScrabbleTiles = [];
ScrabbleTiles['A'] = { value: 1, 'original-distribution': 9, 'number-remaining': 9 };
ScrabbleTiles['B'] = { value: 3, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['C'] = { value: 3, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['D'] = { value: 2, 'original-distribution': 4, 'number-remaining': 4 };
ScrabbleTiles['E'] = { value: 1, 'original-distribution': 12, 'number-remaining': 12 };
ScrabbleTiles['F'] = { value: 4, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['G'] = { value: 2, 'original-distribution': 3, 'number-remaining': 3 };
ScrabbleTiles['H'] = { value: 4, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['I'] = { value: 1, 'original-distribution': 9, 'number-remaining': 9 };
ScrabbleTiles['J'] = { value: 8, 'original-distribution': 1, 'number-remaining': 1 };
ScrabbleTiles['K'] = { value: 5, 'original-distribution': 1, 'number-remaining': 1 };
ScrabbleTiles['L'] = { value: 1, 'original-distribution': 4, 'number-remaining': 4 };
ScrabbleTiles['M'] = { value: 3, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['N'] = { value: 1, 'original-distribution': 6, 'number-remaining': 6 };
ScrabbleTiles['O'] = { value: 1, 'original-distribution': 8, 'number-remaining': 8 };
ScrabbleTiles['P'] = { value: 3, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['Q'] = { value: 10, 'original-distribution': 1, 'number-remaining': 1 };
ScrabbleTiles['R'] = { value: 1, 'original-distribution': 6, 'number-remaining': 6 };
ScrabbleTiles['S'] = { value: 1, 'original-distribution': 4, 'number-remaining': 4 };
ScrabbleTiles['T'] = { value: 1, 'original-distribution': 6, 'number-remaining': 6 };
ScrabbleTiles['U'] = { value: 1, 'original-distribution': 4, 'number-remaining': 4 };
ScrabbleTiles['V'] = { value: 4, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['W'] = { value: 4, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['X'] = { value: 8, 'original-distribution': 1, 'number-remaining': 1 };
ScrabbleTiles['Y'] = { value: 4, 'original-distribution': 2, 'number-remaining': 2 };
ScrabbleTiles['Z'] = { value: 10, 'original-distribution': 1, 'number-remaining': 1 };
ScrabbleTiles['_'] = { value: 0, 'original-distribution': 2, 'number-remaining': 2 };
