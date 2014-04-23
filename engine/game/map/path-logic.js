/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function isPathTile(x,y) {
    var result = false;
    
    if(map[x][y][0] >= 1000 && map[x][y][0] <= 1012) {
        result = true;
    }
    
    return result;
}

function isXOrientedTilePathTile(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1000 || map[x][y][0] == 1002) {
        result = true;
    }
    
    return result;    
}

function isYOrientedTilePathTile(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1001 || map[x][y][0] == 1004) {
        result = true;
    }
    
    return result;    
}

function isTCrossingPointingRight(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1007) {
        result = true;
    }
    
    return result;      
}

function isTCrossingPointingLeft(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1009) {
        result = true;
    }
    
    return result;      
}

function isTCrossingPointingTop(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1010) {
        result = true;
    }
    
    return result;     
}

function isTCrossingPointingBottom(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1008) {
        result = true;
    }
    
    return result;     
}

function isCurveTopLeft(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1005) {
        result = true;
    }
    
    return result;     
}

function isCurveTopRight(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1012) {
        result = true;
    }
    
    return result;     
}

function isCurveBottomLeft(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1006) {
        result = true;
    }
    
    return result;     
}

function isCurveBottomRight(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1003) {
        result = true;
    }
    
    return result;     
}

function isCrossing(x,y) {
    var result = false;
    
    if(map[x][y][0] == 1011) {
        result = true;
    }
    
    return result;     
}


function setTile(x,y) {
    if(!isPathTile(x-1,y) && !isPathTile(x+1,y) && !isPathTile(x,y-1) && !isPathTile(x,y+1)) {
        map[x][y][0] = 1000;
    }
    if(isPathTile(x,y+1) && isPathTile(x+1,y)) {
        map[x][y][0] = 1005;
        if(isYOrientedTilePathTile(x+1,y)) {
           map[x+1][y][0] = 1000; 
        }
        if(isXOrientedTilePathTile(x,y+1)) {
           map[x][y+1][0] = 1001; 
        }
    }
    if(isPathTile(x,y-1) && isPathTile(x+1,y)) {
        map[x][y][0] = 1006;
        if(isYOrientedTilePathTile(x+1,y)) {
           map[x+1][y][0] = 1000; 
        }
        if(isXOrientedTilePathTile(x,y-1)) {
           map[x][y-1][0] = 1001; 
        }
    }
    
    if(isPathTile(x,y+1) && isPathTile(x-1,y)) {
        map[x][y][0] = 1012;
        if(isYOrientedTilePathTile(x-1,y)) {
           map[x-1][y][0] = 1000; 
        }
        if(isXOrientedTilePathTile(x,y+1)) {
           map[x][y+1][0] = 1001; 
        }
    }
    
    if(isPathTile(x,y-1) && isPathTile(x-1,y)) {
        map[x][y][0] = 1003;
        if(isYOrientedTilePathTile(x-1,y)) {
           map[x-1][y][0] = 1000; 
        }
        if(isXOrientedTilePathTile(x,y-1)) {
           map[x][y-1][0] = 1001; 
        }
    }
    
}