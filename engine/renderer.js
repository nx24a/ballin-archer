function render() {

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
                var currentTile = resourceKeeper.textures[cachedImageResources[map[startX+x][startY+y][0]]];
                if(currentTile.supportTile != "") {
                    var supportTile = resourceKeeper.textures[currentTile.supportTile];
                    viewportControl.drawImage(supportTile.image, posX, posY+parseInt(supportTile.offset));
                }
                viewportControl.drawImage(currentTile.image, posX, posY+parseInt(currentTile.offset));    
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

function renderRotation() {

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
                var currentTile = resourceKeeper.textures[cachedImageResources[map[startX+x][startY+y][0]]];
                if(currentTile.supportTile != "") {
                    var supportTile = resourceKeeper.textures[currentTile.supportTile];
                    viewportControl.drawImage(supportTile.image, posX, posY+parseInt(supportTile.offset));
                }
                viewportControl.drawImage(currentTile.image, posX, posY+parseInt(currentTile.offset));    
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

function getCorrectTile(x, xmax, y, ymax, r) {
    
}

function renderBuffer() {

    var xmax = maxDrawRangeX;
    var ymax = xmax+maxDrawRangeY;
    var z=0;
    var c=0;
    var v=0;

    for(var y=0; y<=ymax;y++) {   
        for(var x=v; x<xmax-c;x++) {
           if(y>x && x<z && x>c){
                if(!buffer[startX+x]) {
                    buffer[startX+x] = [];
                    if(!buffer[startX+x][startY+y]) {
                        buffer[startX+x][startY+y] = [];
                    }
                }
                buffer[startX+x][startY+y][0] = map[startX+x][startY+y][0];
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
}