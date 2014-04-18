//create viewport
var viewport = document.createElement("canvas");
var viewportControl = viewport.getContext("2d");
viewport.width = 1900;
viewport.height = 900;

var offsetX = 200;
var offsetY = 250;
var viewportOffsetX = 550;
var viewportOffsetY = 360;
var timeoutvalue = 16;

var buffer = [];

//append viewport to document
$("body").prepend("<div class=\"scrollUp\"><div>");
$("body").prepend("<div class=\"scrollDown\"><div>");
$("body").prepend("<div class=\"scrollLeft\"><div>");
$("body").prepend("<div class=\"scrollRight\"><div>");
$("body").prepend("<div class=\"scrolltopleft\"><div>");
$("body").prepend("<div class=\"scrolltopright\"><div>");
$("body").prepend("<div class=\"scrollbottomleft\"><div>");
$("body").prepend("<div class=\"scrollbottomright\"><div>");
$("body").prepend(viewport);
//start when document is in ready state
$(document).ready(function(){
    init();
    
    $("canvas").bind('mousemove', function(event) { 
        $("#log").html("("+event.pageX+", "+event.pageY+")")
    });
    
    $(".scrollUp").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetY--;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    
    $(".scrollDown").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetY++;
           showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    $(".scrollRight").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetX++;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    $(".scrollLeft").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetX--;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    $(".scrolltopleft").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetX--;
            offsetY--;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    $(".scrolltopright").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetX++;
            offsetY--;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    $(".scrollbottomleft").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetX--;
            offsetY++;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    $(".scrollbottomright").bind('mouseenter', function() {
        var self = $(this);
        this.id = setInterval(function() {
            offsetX++;
            offsetY++;
            showOffSets();
        }, timeoutvalue);
    }).bind('mouseleave', function(){
        this.id && clearInterval(this.id);
    });
    
    function showOffSets() {
        //$("#log").html("("+offsetX+", "+offsetY+")");
    }
    
});

//requestAnimationFrame
window.requestAnimFrame = (function() {
   return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function( callback ) {
              window.setTimeout(callback, 1000/60);
          };
});

//main engine loop
var timestampLast;

function init() {
    depthBuffer();
    timestampLast  = Date.now();
    main();
}

function main() {
    
    var currentTime = Date.now();
    var deltaTime = (currentTime - timestampLast) / 1000.0;
    
    //update logic
    update(deltaTime);
    
    //render 
    render();
    //renderAlt();
    //renderDepth();
    
    //update last timestamp
    timestampLast = currentTime;
    
    //animations  
    //requestAnimFrame(main);
    window.setTimeout(main, 16);
}

function update(deltaTime) {
    
}

function render() {
        //default
        var defaultTileWidth = 32;
        var defaultTileHight = 8;
        
        var maxDrawRangeX = Math.ceil(viewport.width/defaultTileWidth)+10;
        var maxDrawRangeY = Math.ceil(viewport.height/defaultTileHight)+10;
        var startX = offsetX-Math.ceil(maxDrawRangeX/2);
        var endX = offsetX+Math.ceil(maxDrawRangeX/2);
        var startY = offsetY-Math.ceil(maxDrawRangeY/2);
        var endY = offsetY+Math.ceil(maxDrawRangeY/2);
        //draw call 
        var posY = -8;
        var posX = 0;
        var grid = 0;
        var gridcontrol = false;
        
        loadImages(sources, function(images) {
            for(var y=0; y<maxDrawRangeY; y++) {  
                for(var x=0; x<maxDrawRangeX; x++) {
                    
                    posX = 550+(x-y)*16;
                    posY = (((x+y)*16)/2)-360;
                    
                        if(map[startX+x][startY+y][0] == 0) {
                            viewportControl.drawImage(images.water0, posX, posY+grid);  
                        }
                        if(map[startX+x][startY+y][0] == 1) {
                            viewportControl.drawImage(images.water1, posX, posY+grid);
                        }
                        if(map[startX+x][startY+y][0] == 2) {
                            viewportControl.drawImage(images.grass0, posX, posY+grid);
                        } 
                        if(map[startX+x][startY+y][0] == 4) {
                            viewportControl.drawImage(images.islandDefaultLeftFrontCorner, posX, posY+grid);
                        } 
                        if(map[startX+x][startY+y][0] == 5) {
                            viewportControl.drawImage(images.islandDefaultRightBackCorner, posX, posY+grid+7);
                        } 
                        if(map[startX+x][startY+y][0] == 6) {
                            viewportControl.drawImage(images.islandDefaultLeftBackCorner, posX, posY+grid+6);
                        } 
                        if(map[startX+x][startY+y][0] == 7) {
                            viewportControl.drawImage(images.islandDefaultRightFrontCorner, posX, posY+grid);
                        }
                        if(map[startX+x][startY+y][0] == 8) {
                            viewportControl.drawImage(images.bottomLeftCorner, posX, posY+grid+5);
                        } 
                        if(map[startX+x][startY+y][0] == 9) {
                            viewportControl.drawImage(images.bottomRightCorner, posX, posY+grid);
                        } 
                        if(map[startX+x][startY+y][0] == 10) {
                            viewportControl.drawImage(images.topLeftCorner, posX, posY+grid+10);
                        } 
                        if(map[startX+x][startY+y][0] == 11) {
                            viewportControl.drawImage(images.topRightCorner, posX, posY+grid+6);
                        }
                }
            } 
          });
    
}

function animation(main) {
    
}

function depthBuffer() {
    
    var posX, posY;
    
    for(var x=0; x<1000; x++) {
        for(var y=0; y<1000; y++) {



            var tile = {
              _positionX: x,
              _positionY: y,
              _texture: map[x][y][0]
            };

            var z = map[x][y][1];
            
            if(!buffer[z]) {
                buffer[z] = [];
            }
            
            buffer[z].push(tile);
        }        
    } 
}

function renderDepth() {
        
        var defaultTileWidth = 16;
        var defaultTileHight = 8;
        
        var maxDrawRangeX = Math.ceil(viewport.width/defaultTileWidth);
        var maxDrawRangeY = Math.ceil(viewport.height/defaultTileHight);
        var startX = offsetX-Math.ceil(maxDrawRangeX/2);
        var startY = offsetY-Math.ceil(maxDrawRangeY/2);
    
        //default
        var grid = 0;
        var gridcontrol = false;
        
        var cameraFocusedTileX = (offsetX-offsetY)*16;
        var cameraFocusedTileY = ((offsetX+offsetY)*16)/2;

        var diffY = 2000;
        var diffX = 2200;
        
        var posX, posY;
        
        loadImages(sources, function(images) {
            
            for(var z=0; z<buffer.length;z++) {
                for(var o=0; o<buffer[z].length; o++) {
                    
                    var obj = buffer[z][o];
                    
                    if(obj._positionX > (startX-maxDrawRangeX) && obj._positionX < (startX+maxDrawRangeX)) {
                        if(obj._positionY > (startY-maxDrawRangeY) && obj._positionY < (startY+maxDrawRangeY)) {
                        
                            posX = (viewportOffsetX+(obj._positionX-obj._positionY)*16)+startX;
                            posY = ((((obj._positionX+obj._positionY)*16)/2)-viewportOffsetY)+startY;
                        
                            if(obj._texture == 0) {
                                viewportControl.drawImage(images.water0, posX, posY);  
                            }
                            if(obj._texture == 1) {
                                viewportControl.drawImage(images.water1, posX, posY);  
                            }
                            if(obj._texture == 2) {
                                viewportControl.drawImage(images.grass0, posX, posY);  
                            }
                            if(obj._texture == 4) {
                                viewportControl.drawImage(images.islandDefaultLeftFrontCorner, posX, posY);  
                            }
                            if(obj._texture == 5) {
                                viewportControl.drawImage(images.islandDefaultRightBackCorner, posX, posY);  
                            }
                            if(obj._texture == 6) {
                                viewportControl.drawImage(images.islandDefaultLeftBackCorner, posX, posY);  
                            }
                            if(obj._texture == 7) {
                                viewportControl.drawImage(images.islandDefaultRightFrontCorner, posX, posY);  
                            }  
                            
                        }
                        
                    }
                }
            }
        });
        
  }
