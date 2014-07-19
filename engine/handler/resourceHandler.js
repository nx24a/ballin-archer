function loadResources() {
    loadImageResources();
    //loadSFXResources();
    //loadMusicResources();
}

function loadImageResources() {
    for(i=0; i<resourceKeeper.textures.length; i++) {
        cachedImageResources[resourceKeeper.textures[i].position] = i;
        resourceKeeper.textures[i].image = new Image();
        resourceKeeper.textures[i].image.src = resourceKeeper.textures[i].path;
    }  
}

function loadSFXResources() {
    for(i=0; i<resourceKeeper.sound.length; i++) {
        cachedSoundResources[resourceKeeper.sound[i].position] = i;
        resourceKeeper.sound[i].audio = new Audio();
        resourceKeeper.sound[i].audio.src = resourceKeeper.sound[i].path;
    }
}

function loadMusicResources() {
    for(i=0; i<resourceKeeper.music.length; i++) {
        cachedSoundResources[resourceKeeper.music[i].position] = i;
        resourceKeeper.music[i].audio = new Audio();
        resourceKeeper.music[i].audio.src = resourceKeeper.music[i].path;
    }
}