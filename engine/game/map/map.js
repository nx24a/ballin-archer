var map = [];
var map_tiles_x = 1000;
var map_tiles_y = 1000;

for(var i=0; i<map_tiles_x; i++) {
    if(!map[i]) {
        map[i] = [];
    }
}

for(var i=0; i<map_tiles_x; i++){
    for(var j=0; j<map_tiles_y; j++){
        map[i][j] = "1";
    }   
}

var offsetIslandX = 480;
var offsetIslandY = 450;

var offsetIslandXStart = Math.floor(offsetIslandX/2);
var maxMapI = 20;
for(var i=0; i<maxMapI+1; i++){  
    for(var j=0; j<((2*i)+1); j++){
        map[(offsetIslandX-i)+j][offsetIslandY] = "2";
        map[(offsetIslandX-i)+j][(offsetIslandX+(Math.floor(maxMapI/2)))-i] = "2";
    }   
    offsetIslandY++;
}


//island size


var sources = {
  water0: 'water-0.png',  
  water1: 'water-1.png',
  grass0: 'grass-0.png'
};

