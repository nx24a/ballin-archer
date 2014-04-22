function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    
    //get num of sources
    for(var src in sources) {
        numImages++;
    }
    for(var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
    
}

function loadImageResources() {
    //test case
    for(i=0; i<resourceKeeper.textures.length; i++) {
        cachedImageResources[resourceKeeper.textures[i].position] = i;
        resourceKeeper.textures[i].image = new Image();
        resourceKeeper.textures[i].image.src = resourceKeeper.textures[i].path;
    }  
}

//Resources

var sources = {
  water0: 'resources/test/water-0.png',  
  water1: 'resources/test/water-1.png',
  grass0: 'resources/test/grass-0.png',
  islandDefaultLeftFrontCorner: 'resources/test/cornerFrontLeft.png',
  islandDefaultLeftBackCorner: 'resources/test/cornerBackLeft.png',
  islandDefaultRightFrontCorner: 'resources/test/cornerFrontRight.png',
  islandDefaultRightBackCorner: 'resources/test/cornerBackRight.png',
  bottomLeftCorner: 'resources/test/bottomLeftCorner.png',
  bottomRightCorner: 'resources/test/bottomRightCorner.png',
  topLeftCorner: 'resources/test/topLeftCorner.png',
  topRightCorner: 'resources/test/topRightCorner.png',
  waterLeft: 'resources/test/waterLeft.png',
  waterRight: 'resources/test/waterRight.png',
  waterTop: 'resources/test/waterTop.png',
  waterBottom: 'resources/test/waterBottom.png',
  activeField: 'resources/test/active.png',
  street_stone_0: 'resources/test/street-stone/000.png',
  street_stone_1: 'resources/test/street-stone/001.png',
  street_stone_2: 'resources/test/street-stone/002.png',
  street_stone_3: 'resources/test/street-stone/003.png',
  street_stone_4: 'resources/test/street-stone/004.png',
  street_stone_5: 'resources/test/street-stone/005.png',
  street_stone_6: 'resources/test/street-stone/006.png',
  street_stone_7: 'resources/test/street-stone/007.png',
  street_stone_8: 'resources/test/street-stone/008.png',
  street_stone_9: 'resources/test/street-stone/009.png',
  street_stone_10: 'resources/test/street-stone/010.png',
  street_stone_11: 'resources/test/street-stone/011.png',
  street_stone_12: 'resources/test/street-stone/012.png',
  wall: 'resources/test/wall0.png',
  pier: 'resources/test/pier0.png',
  fischer: 'resources/test/fischer0.png',
  kontor1: 'resources/test/kontor1.png',
  kontor2: 'resources/test/kontor2.png',
  kontor3: 'resources/test/kontor3.png',
  kontor4: 'resources/test/kontor4.png',
};