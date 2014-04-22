

//create viewport
var viewport = document.createElement("canvas");
var viewportControl = viewport.getContext("2d");

viewport.width = 1280;
viewport.height = 800;

var offsetX = 201;
var offsetY = 251;

var viewportOffsetX = viewport.width;
var viewportOffsetY = 18;

var defaultTileWidth = 16;
var defaultTileHight = 8;

var timeoutvalue = 16;

var maxDrawRangeX = Math.ceil(viewport.width/(defaultTileWidth*2)+8);
var maxDrawRangeY = Math.ceil(viewport.height/(defaultTileHight*2)+4);

var startX = 202;
var startY = 160;

var pageX, pageY, mouseX, mouseY;

var toDraw = 21;

//append viewport to document
$("body").prepend(viewport);

//start when document is in ready state
$(document).ready(function(){
    init();  
    
    $("#setC").click(function(){
        startX = parseInt($("#coordX").val());
        startY = parseInt($("#coordY").val());
    });
    
    $("#street").click(function(){
        toDraw = 21;
    });
    
    $("#wall").click(function(){
        toDraw = 22;
    });
    
    $("#pier").click(function(){
        toDraw = 23;
    });
    
    $("#fischer").click(function(){
        toDraw = 24;
    });
    
    $("canvas").bind('mousemove', function(event) { 
            
            pageX = viewport.width-event.pageX;
            pageY = event.pageY;

            mouseX = -Math.floor(((pageX)/16)/2-((pageY)/8)/2);
            mouseY = Math.floor(((pageX)/16)/2+((pageY)/8)/2)+1;

            if(event.pageX<30)
            {
                startX--;
            }
            
            if(event.pageX>1250)
            {
                startX++;
            }
            
            if(event.pageY<30)
            {
                startY--;
            }
            
            if(event.pageY>770)
            {
                startY++;
            }

            $("#log").html("("+mouseX+", "+mouseY+")"+" offset ("+event.pageX+","+event.pageY+")");

        });
        
   $("canvas").bind('click', function(){
       map[startX+mouseX][startY+mouseY][0] = toDraw;
   });

    /*
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
    */
});