import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const KEY_PLAY_TIME = 'videoplayer-current-time';
    
player.on('timeupdate', throttle(onTime, 1000));

function onTime(currentTime) {
    localStorage.setItem(KEY_PLAY_TIME, JSON.stringify(currentTime.seconds));
    };

onSavedTime();
function onSavedTime() {
  //   const savedTime = JSON.parse(localStorage.getItem(KEY_PLAY_TIME));
  const savedTime = localStorage.getItem(KEY_PLAY_TIME);
  //   if (savedTime) {
  if (!savedTime) {
    return;
  }
  player.setCurrentTime(savedTime);
}