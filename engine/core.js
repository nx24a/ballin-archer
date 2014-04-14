//create viewport
var viewport = document.createElement("canvas");
var viewportControl = viewport.getContext("2d");
viewport.width = 1900;
viewport.height = 900;

var offsetX = 450;
var offsetY = 450;
var timeoutvalue = 16;
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
        $("#log").html("("+offsetX+", "+offsetY+")");
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
                    if(y%2 === 0) {
                        posX = ((32*x)-16);

                    } else {
                        posX = (32*x);
                    }
                    if(map[startX+x][startY+y] == 0) {
                        viewportControl.drawImage(images.water0, posX, posY+grid);  
                    }
                    if(map[startX+x][startY+y] == 1) {
                        viewportControl.drawImage(images.water1, posX, posY+grid);
                    }
                    if(map[startX+x][startY+y] == 2) {
                        viewportControl.drawImage(images.grass0, posX, posY+grid);
                    }                   
                } 

                posY = posY+8;
                if(gridcontrol) {
                    grid = grid+1;
                } 
            } 
          });
    
}

function animation(main) {
    
}