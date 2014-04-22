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
        map[i][j][1] = -1;
    }   
}


island(200,200, 10);
island(260,300, 20);

function island(x,y,s) {
for(var i=x; i<x+s; i++){
    for(var j=y; j<y+s; j++){
            map[i][j][0] = 2;
            map[i][j][1] = 10;
        if(j==y+s-1) {
            map[i][j][0] = 4;
            //map[i][j][1] = 2;
            map[i][j+1][0] = 13;
            //map[i][j+1][1] = 1;
        }
        if(j==y) {
            map[i][j][0] = 5;
            //map[i][j][1] = 1;
            map[i][j-1][0] = 12;
            //map[i][j-1][1] = 1;
        }
        if(i==x) {
            map[i][j][0] = 6;
            //map[i][j][1] = 1;
            map[i-1][j][0] = 14;
            //map[i-1][j][1] = 1;
        }
        if(i==x+s-1) {
            map[i][j][0] = 7;
            //map[i][j][1] = 2;
            map[i+1][j][0] = 15;
            //map[i+1][j][1] = 2;
        }
        

    }
    

map[x][y][0] = 10;
map[x+s-1][y][0] = 11;
map[x][y+s-1][0] = 8;
map[y+s-1][y+s-1][0] = 9;
    
}

}
//island size

