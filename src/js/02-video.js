import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
    const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
const key = 'videoplayer-current-time';
const savedTime = localStorage.getItem(key);


    const onPlay = function(e) {
    // data is an object containing properties specific to that event
        
        
        localStorage.setItem(key, e.seconds);
};

if (savedTime) { player.setCurrentTime(savedTime) };

player.on('timeupdate', throttle(onPlay, 1000));



