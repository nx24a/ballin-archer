function render() {

    drawCalls = 0;

    var posX, posY; 
    var xmax = maxDrawRangeX;
    var ymax = xmax+maxDrawRangeY;
    var tiles = 0;
    var z=0;
    var c=0;
    var v=0;

    for(var y=0; y<=ymax;y++) {   
        for(var x=v; x<xmax-c;x++) {
           if(y>x && x<z && x>c){
           posX = viewportOffsetX+(x-y)*defaultTileWidth;
           posY = (((x+y)*defaultTileWidth)/2)-viewportOffsetY;
                var currentTile = resourceKeeper.textures[cachedImageResources[getCorrectTile(x, xmax, y, ymax)]];
                if(currentTile.supportTile != "") {
                    var supportTile = resourceKeeper.textures[currentTile.supportTile];
                    viewportControl.drawImage(supportTile.image, posX, posY+parseInt(supportTile.offset));
                }
                viewportControl.drawImage(currentTile.image, posX, posY+parseInt(currentTile.offset)); 
                drawCalls++;
           }        
       }
       z++;
       if(y<(ymax/2)) {
           c--;
           v=c;
       } else {
           c--;
           v++;
       }

    }
    
    var currentTile = resourceKeeper.textures[19];
    posX = viewportOffsetX+(mouseX-mouseY)*defaultTileWidth;
    posY = (((mouseX+mouseY)*defaultTileWidth)/2)-viewportOffsetY;
    viewportControl.drawImage(currentTile.image, posX, posY); 
}

function getCorrectTile(x, xmax, y, ymax) {
    
    switch(currentRotationAngle) {
        case 90:
            return map[startX+(ymax-y)][startY+x][0];
        break;
        case 180:
            return map[startX+(xmax-x)][startY+(ymax-y)][0];
        break;
        case 270:
            return map[startX+y][startY+(x-xmax)][0];
        break;
        default:
            return map[startX+x][startY+y][0];
        break;
    }   
}

function getScale(s) {
    
}