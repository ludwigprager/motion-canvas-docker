import {makeProject} from '@motion-canvas/core';

import layouts from './scenes/layouts?scene';
import s1 from './scenes/s1?scene';
import l2 from './scenes/l2?scene';


export default makeProject({
  scenes: [l2,s1,layouts],
});
