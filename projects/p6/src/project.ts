import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import example2 from './scenes/example2?scene';
import s3 from './scenes/s3?scene';
import s4 from './scenes/s4?scene';
import s5 from './scenes/s5?scene';
import layouts from './scenes/layouts?scene';
import signals from './scenes/signals?scene';
// ...
import audio from '../audio/voice.mp3';

export default makeProject({
  scenes: [signals, example, example2, s3, s4, s5],
//scenes: [ s4],
  audio: audio,
});
