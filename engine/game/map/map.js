var map = [];
var map_tiles_x = 1000;
var map_tiles_y = 1000;

for(var i=0; i<map_tiles_x; i++) {
    if(!map[i]) {
        map[i] = [];
    }
    
    for(var j=0; j<map_tiles_y; j++) {
        if(!map[i][j]) {
            map[i][j] = [];
        }
    }
    
}

for(var i=0; i<map_tiles_x; i++){
    for(var j=0; j<map_tiles_y; j++){
        map[i][j][0] = 1;
        map[i][j][1] = 0;
    }   
    offsetIslandY++;
}


island(200,200);
island(260,300);

function island(x,y) {
for(var i=x; i<x+20; i++){
    for(var j=y; j<y+20; j++){
            map[i][j][0] = 2;
            map[i][j][1] = 2;
        if(j==y+19) {
            map[i][j][0] = 4;
            map[i][j][1] = 2;
        }
        if(j==y) {
            map[i][j][0] = 5;
            map[i][j][1] = 1;
        }
        if(i==x) {
            map[i][j][0] = 6;
            map[i][j][1] = 1;
        }
        if(i==x+19) {
            map[i][j][0] = 7;
            map[i][j][1] = 2;
        }
        

    }
    

map[x][y][0] = 10;
map[x+19][y][0] = 11;
map[x][y+19][0] = 8;
map[y+19][y+19][0] = 9;
    
}

}
//island size

var sources = {
  water0: 'resources/test/water-0.png',  
  water1: 'resources/test/water-1.png',
  grass0: 'resources/test/grass-0.png',
  islandDefaultLeftFrontCorner: 'resources/test/cornerFrontLeft.png',
  islandDefaultLeftBackCorner: 'resources/test/cornerBackLeft.png',
  islandDefaultRightFrontCorner: 'resources/test/cornerFrontRight.png',
  islandDefaultRightBackCorner: 'resources/test/cornerBackRight.png',
  bottomLeftCorner: 'resources/test/bottomLeftCorner.png',
  bottomRightCorner: 'resources/test/bottomRightCorner.png',
  topLeftCorner: 'resources/test/topLeftCorner.png',
  topRightCorner: 'resources/test/topRightCorner.png'
};

