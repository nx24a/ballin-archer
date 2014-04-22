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
    renderInverse();
    
    //update last timestamp
    timestampLast = currentTime;
    
    //animations  
    //requestAnimFrame(main);
    window.setTimeout(main, 32);
}

function update(deltaTime) {
    
}

function animation(main) {
    
}