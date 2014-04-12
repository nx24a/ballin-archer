/*$(document).ready(function(){

    var currentMousePos = { x: -1, y: -1 };
    var currentCellPos = {x: -1, y: -1};
    $("#frame").mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        currentCellPos.x = Math.floor(currentMousePos.x/65);
        currentCellPos.y = Math.floor(currentMousePos.y/39);
        $("#log").html("Pos: " + currentCellPos.x + ", " + currentCellPos.y);
        $(".selector").css("position", "absolute");
        $(".selector").css("top", currentMousePos.y);
        $(".selector").css("left", currentMousePos.x);
    });

    

    $("#frame").click(function(){
         $(this).append("<img src=\"x.gif\"/>")
    });
    
});*/

//Startvalues
var map = [];
var playerShips = [];

$(document).ready(function(){
    initGame();
});

function initGame() {

    map[0] = new Island(0, 6);
    playerShips[0] = new Ship(1,1);
    
    var test = map[0].getResourceAt(1);
    var name = test.getName();
    alert(test.getResourceName(name));
};


