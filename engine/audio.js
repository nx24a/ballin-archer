var sfxControl = { current: "", type: "", volume: "" };
var musicControl = { track: -1, current: "", type: "", volume: "" };

function musicRotation() {
    if(musicControl.track < 0) {
        musicControl.track = 0;
        setMasterVolume(0.1);
        
    } else {
        if((musicControl.current.duration-musicControl.current.currentTime) < 5) {
            if(musicControl.track < resourceKeeper.music.length) {
                musicControl.track++;
            } else {
                musicControl.track = 0;
            }
            
        }
    }
    setMusicTrack(musicControl.track);
    playMusicTrack();
}

function setSfxVolume(volumeLevel) {
    if(volumeLevel > 0 && volumeLevel <= 1) {
       sfxControl.volume = volumeLevel; 
    }
    
    sfxControl.current.volume = sfxControl.volume;
}

function setMusicVolume(volumeLevel) {
    if(volumeLevel > 0 && volumeLevel <= 1) {
       musicControl.volume = volumeLevel; 
    }
    
    musicControl.current.volume = musicControl.volume;
}

function setMasterVolume(volumeLevel) {
    if(volumeLevel > 0 && volumeLevel <= 1) {
       sfxControl.volume = volumeLevel; 
       musicControl.volume = volumeLevel; 
    }    
    
    sfxControl.current.volume = sfxControl.volume;
    musicControl.current.volume = musicControl.volume;   
}

function setMusicTrack(track) {
    if(musicControl.current != "") {
        musicControl.current.pause();
    }

    musicControl.current = resourceKeeper.music[track].audio;
    musicControl.type = "mp3";   
}

function setSFXTrack(track) {
    if(musicControl.current != "") {
        sfxControl.current.pause();
    }
    
    sfxControl.current = resourceKeeper.sound[track].audio;
    sfxControl.type = "mp3";     
}

function playMusicTrack() {
    musicControl.current.play();
}

function playSFXTrack() {
    sfxControl.current.play();
}