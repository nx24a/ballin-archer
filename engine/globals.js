var buffer = [];

//create viewport
var viewport = document.createElement("canvas");
var viewportControl = viewport.getContext("2d");

viewport.width = 1024;
viewport.height = 768;

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
var startY = 140;

var currentRotationAngle = 0;

var pageX, pageY, mouseX, mouseY;

var toDraw = 0;

var moveX, moveY = false;

var consoleOpened = false;

var approximativeMode = false;


//append viewport to document
$("#canvasContainer").append(viewport);

//start when document is in ready state
$(document).ready(function(){
    init();  
    $("canvas").addClass("pointer");
    $("#setC").click(function(){
        startX = parseInt($("#coordX").val());
        startY = parseInt($("#coordY").val());
    });
    
    $("#street").click(function(){
        toDraw = 1;
    });
    
    $("#wall").click(function(){
        toDraw = 4;
    });
    
    $("#pier").click(function(){
        toDraw = 2;
    });
    
    $("#fischer").click(function(){
        toDraw = 3;
    });
    
    $("#kontor").click(function(){
        toDraw = 0;
    });
    
    $("canvas").bind('mousemove', function(event) { 
            
            pageX = viewport.width-event.pageX;
            pageY = event.pageY;

            mouseX = -Math.floor(((pageX)/16)/2-((pageY)/8)/2);
            mouseY = Math.floor(((pageX)/16)/2+((pageY)/8)/2)+1;
            
            if(event.pageX<30)
            {
                startX--;
                $("canvas").css("cursor: url(resources/textures/icons/scroll_up.png), auto;");
            }
            
            if(event.pageX>viewport.width-30)
            {
                startX++;
                $("canvas").css("cursor: url(resources/textures/icons/scroll_down.png), auto;");
            }
            
            if(event.pageY<30)
            {
                startY--;
                $("canvas").css("cursor: url(resources/textures/icons/scroll_left.png), auto;");
            }
            
            if(event.pageY>viewport.height-30)
            {
                startY++;
                $("canvas").css("cursor: url(resources/textures/icons/scroll_right.png), auto;");
            }
            
            $("#consoleStats").html("Cursor position on screen:("+mouseX+", "+mouseY+")");

        });
        
   $("canvas").bind('click', function(){
       buildStructure(toDraw);
   });
   $("body").keydown(function(event){
       if(event.which == 192 || event.which == 220) {
           if(!consoleOpened) {
                $( "#console" ).animate({opacity: 1,top: "0px"});
                $(".consoleInput").focus();
                consoleOpened = true;
           } else {
                $( "#console" ).animate({opacity: 1,top: "-200px"});
                consoleOpened = false;
           }
           
       }
   });
   
   $(".consoleInput").keydown(function(event){
       if($(".consoleInput").val().substr(0,1) == "^") {
           $(".consoleInput").val("");
           $(".consoleInput").blur();
           $( "#console" ).animate({opacity: 1,top: "-200px"});
           consoleOpened = false;
       }
       else if(event.which == 13) {
           setCommand($(".consoleInput").val());
           $(".consoleInput").val("");
       }
   });
});

function buildStructure(type) {
    
    switch(type) {
        case 0:
            if(map[startX+mouseX][startY+mouseY][1] == 100) {
            map[startX+mouseX][startY+mouseY][0] = 26;
            map[startX+mouseX-1][startY+mouseY][0] = 25;
            map[startX+mouseX][startY+mouseY-1][0] = 27;
            map[startX+mouseX][startY+mouseY-2][0] = 28;
            }
        break;
        case 1:
            setTile(startX+mouseX,startY+mouseY);
        break;
        case 2:
            map[startX+mouseX][startY+mouseY][0] = 23;
        break;
        case 3:
            map[startX+mouseX][startY+mouseY][0] = 24;
        break;
    }
}

function setCommand(cmd) {

    if(cmd.substr(0,4) == "goto") {
        var coords = cmd.substr(4).split(" ");
        setCameraPosition(parseInt(coords[1]),parseInt(coords[2]));
    }
    if(cmd.substr(0,3) == "set") {
        var info = cmd.substr(3).split(" ");
        if(info[1] == "render") {
            if(info[2] == "alternative") {
                if(info[3] == "true") {
                    approximativeMode = true;
                    $("#consoleContent").append("<p>> rendering via setTimeout</p>");
                } else {
                    approximativeMode = false;
                    $("#consoleContent").append("<p>> rendering via requestAnimationFrame</p>");
                }
            }
        }
        if(info[1] == "rotation") {
            currentRotationAngle = parseInt(info[2]);
            $("#consoleContent").append("<p>> rotation angle is set to: " + info[2] + "&deg; clockwise</p>" );
        }
    }
    
}

function setCameraPosition(x,y) {
    if(x>0 && x<1000)
        startX = x;
    if(y>0 && y<1000)
    startY = y;

    $("#consoleContent").append("<p>> setting camera to position: "+x+","+y+"</p>");
}