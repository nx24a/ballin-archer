//
var buffer = [];

function depthBuffer() {
    
    var startX = 202;
    var startY = 160;
    var posX, posY; 
    var xmax = maxDrawRangeX;
    var ymax = xmax+maxDrawRangeY;
    var z=0;
    var c=0;
    var v=0;

    for(var y=ymax; y>=1;y--) {   
        for(var x=v; x<xmax-c;x++) {
            if(y>x && x<z && x>c){
                posX = viewportOffsetX+(x-y)*defaultTileWidth;
                posY = (((x+y)*defaultTileWidth)/2)-viewportOffsetY;

                 var tile = {
                  _positionX: posX,
                  _positionY: posY,
                  _texture: map[startX+x][startY+y][0]
                };

                var depth = map[startX+x][startY+y][1];

                if(!buffer[z]) {
                    buffer[z] = [];
                }

                buffer[z].push(tile);
            }  
        }
        
        z++;
        if(y>(ymax/2)) {
            c--;
            v=c;
        } else {
            c--;
            v++;
        }
    }  
}

function renderDepth() {
        
        loadImages(sources, function(images) {         
            for(var z=1; z<buffer.length;z++) {
                for(var o=0; o<buffer[z].length; o++) {
                    
                    var obj = buffer[z][o];
                            
                    if(obj._texture == 0) {
                        viewportControl.drawImage(images.water0, obj._positionX, obj._positionY);  
                    }
                    if(obj._texture == 1) {
                        viewportControl.drawImage(images.water1, obj._positionX, obj._positionY);
                    }
                    if(obj._texture == 2) {
                        viewportControl.drawImage(images.grass0, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 4) {
                        viewportControl.drawImage(images.islandDefaultLeftFrontCorner, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 5) {
                        viewportControl.drawImage(images.islandDefaultRightBackCorner, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 6) {
                        viewportControl.drawImage(images.islandDefaultLeftBackCorner, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 7) {
                        viewportControl.drawImage(images.islandDefaultRightFrontCorner, obj._positionX, obj._positionY);
                    }
                    if(obj._texture == 8) {
                        viewportControl.drawImage(images.bottomLeftCorner, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 9) {
                        viewportControl.drawImage(images.bottomRightCorner, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 10) {
                        viewportControl.drawImage(images.topLeftCorner, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 11) {
                        viewportControl.drawImage(images.topRightCorner, obj._positionX, obj._positionY);
                    }
                    if(obj._texture == 12) {
                        viewportControl.drawImage(images.waterTop, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 13) {
                        viewportControl.drawImage(images.waterBottom, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 14) {
                        viewportControl.drawImage(images.waterLeft, obj._positionX, obj._positionY);
                    } 
                    if(obj._texture == 15) {
                        viewportControl.drawImage(images.waterRight, obj._positionX, obj._positionY);
                    }          
                }            
            }
        });
        
  }
  
function renderNormal() {

        var startX = 202;
        var startY = 160;
        var posX, posY; 
        var xmax = maxDrawRangeX;
        var ymax = xmax+maxDrawRangeY;
        var tiles = 0;
        var z=0;
        var c=0;
        var v=0;
        
        loadImages(sources, function(images) {
            //for(var y=ymax; y>=1;y--) {
            for(var y=ymax; y>=1;y--) {   
                for(var x=v; x<xmax-c;x++) {
                   if(y>x && x<z && x>c){
                   posX = viewportOffsetX+(x-y)*defaultTileWidth;
                   posY = (((x+y)*defaultTileWidth)/2)-viewportOffsetY;
                   //viewportControl.drawImage(images.water1, posX, posY);
                   //if(x>0 && y>0) {
                        if(map[startX+x][startY+y][0] == 0) {
                            viewportControl.drawImage(images.water0, posX, posY);  
                        }
                        if(map[startX+x][startY+y][0] == 1) {
                            viewportControl.drawImage(images.water1, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 2) {
                            viewportControl.drawImage(images.grass0, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 4) {
                            viewportControl.drawImage(images.islandDefaultLeftFrontCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 5) {
                            viewportControl.drawImage(images.islandDefaultRightBackCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 6) {
                            viewportControl.drawImage(images.islandDefaultLeftBackCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 7) {
                            viewportControl.drawImage(images.islandDefaultRightFrontCorner, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 8) {
                            viewportControl.drawImage(images.bottomLeftCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 9) {
                            viewportControl.drawImage(images.bottomRightCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 10) {
                            viewportControl.drawImage(images.topLeftCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 11) {
                            viewportControl.drawImage(images.topRightCorner, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 12) {
                            viewportControl.drawImage(images.waterTop, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 13) {
                            viewportControl.drawImage(images.waterBottom, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 14) {
                            viewportControl.drawImage(images.waterLeft, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 15) {
                            viewportControl.drawImage(images.waterRight, posX, posY);
                        }
                    //} else {
                    //     viewportControl.drawImage(images.water1, posX, posY);
                    //}
                   
                   //
                   tiles++;
                   }  
               }
               z++;
               if(y>(ymax/2)) {
                   c--;
                   v=c;
               } else {
                   c--;
                   v++;
               }
               
           }
           console.log(tiles); 
         });         
 }

function renderInverse() {

        //var startX = 202;
        //var startY = 160;
        var posX, posY; 
        var xmax = maxDrawRangeX;
        var ymax = xmax+maxDrawRangeY;
        var tiles = 0;
        var z=0;
        var c=0;
        var v=0;
        
        loadImages(sources, function(images) {
            for(var y=0; y<=ymax;y++) {   
                for(var x=v; x<xmax-c;x++) {
                   if(y>x && x<z && x>c){
                   posX = viewportOffsetX+(x-y)*defaultTileWidth;
                   posY = (((x+y)*defaultTileWidth)/2)-viewportOffsetY;

                        if(map[startX+x][startY+y][0] == 0) {
                            viewportControl.drawImage(images.water0, posX, posY);  
                        }
                        if(map[startX+x][startY+y][0] == 1) {
                            viewportControl.drawImage(images.water1, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 2) {
                            viewportControl.drawImage(images.grass0, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 4) {
                            viewportControl.drawImage(images.islandDefaultLeftFrontCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 5) {
                            viewportControl.drawImage(images.islandDefaultRightBackCorner, posX, posY+7);
                        } 
                        if(map[startX+x][startY+y][0] == 6) {
                            viewportControl.drawImage(images.islandDefaultLeftBackCorner, posX, posY+7);
                        } 
                        if(map[startX+x][startY+y][0] == 7) {
                            viewportControl.drawImage(images.islandDefaultRightFrontCorner, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 8) {
                            viewportControl.drawImage(images.bottomLeftCorner, posX, posY+5);
                        } 
                        if(map[startX+x][startY+y][0] == 9) {
                            viewportControl.drawImage(images.bottomRightCorner, posX, posY);
                        } 
                        if(map[startX+x][startY+y][0] == 10) {
                            viewportControl.drawImage(images.water1, posX, posY);
                            viewportControl.drawImage(images.topLeftCorner, posX, posY+11);
                        } 
                        if(map[startX+x][startY+y][0] == 11) {
                            viewportControl.drawImage(images.topRightCorner, posX, posY+7);
                        }
                        if(map[startX+x][startY+y][0] == 12) {
                            viewportControl.drawImage(images.water1, posX, posY);
                            viewportControl.drawImage(images.waterTop, posX, posY+11);
                        } 
                        if(map[startX+x][startY+y][0] == 13) {
                            viewportControl.drawImage(images.waterBottom, posX, posY+8);
                        } 
                        if(map[startX+x][startY+y][0] == 14) {
                            viewportControl.drawImage(images.water1, posX, posY);
                            viewportControl.drawImage(images.waterLeft, posX, posY+12);
                        } 
                        if(map[startX+x][startY+y][0] == 15) {
                            viewportControl.drawImage(images.waterRight, posX, posY+5);
                        }
                        if(map[startX+x][startY+y][0] == 21) {
                            viewportControl.drawImage(images.street, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 22) {
                            viewportControl.drawImage(images.wall, posX, posY-30);
                        }
                        if(map[startX+x][startY+y][0] == 23) {
                            viewportControl.drawImage(images.islandDefaultRightFrontCorner, posX, posY);
                            viewportControl.drawImage(images.pier, posX, posY);
                        }
                        if(map[startX+x][startY+y][0] == 24) {
                            viewportControl.drawImage(images.islandDefaultRightFrontCorner, posX, posY);
                            viewportControl.drawImage(images.fischer, posX, posY-15);
                        }
                   tiles++;
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
            posX = viewportOffsetX+(mouseX-mouseY)*defaultTileWidth;
            posY = (((mouseX+mouseY)*defaultTileWidth)/2)-viewportOffsetY;
            viewportControl.drawImage(images.activeField, posX, posY);
            console.log(tiles); 
         });         
 }