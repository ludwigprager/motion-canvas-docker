import {makeProject} from '@motion-canvas/core';

import layouts from './scenes/layouts?scene';
import s1 from './scenes/s1?scene';
import signals from './scenes/signals?scene';


export default makeProject({
  scenes: [s1],
});
