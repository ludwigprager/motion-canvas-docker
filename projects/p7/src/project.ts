import {makeProject} from '@motion-canvas/core';

import signals from './scenes/signals?scene';
import audio from '../audio/voice.mp3';

export default makeProject({
  scenes: [signals],
  audio: audio,
});
