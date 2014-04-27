//requestAnimationFrame
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

//main engine loop
var timestampLast;

function init() {
    timestampLast  = Date.now();
    loadResources();
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
    //
    if(approximativeMode) {
        window.setTimeout(main, timeoutvalue);
    }
    else {
        requestAnimFrame(main);
    }
        
}

function update(deltaTime) {
    //musicRotation();
}

function animation(main) {
    
}