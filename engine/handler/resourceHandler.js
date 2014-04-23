function loadResources() {
    loadImageResources();
    loadAudioResources();
}

function loadImageResources() {
    //test case
    for(i=0; i<resourceKeeper.textures.length; i++) {
        cachedImageResources[resourceKeeper.textures[i].position] = i;
        resourceKeeper.textures[i].image = new Image();
        resourceKeeper.textures[i].image.src = resourceKeeper.textures[i].path;
    }  
}

function loadAudioResources() {
    var audio = true;
}