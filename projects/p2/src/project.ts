import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import s1 from './scenes/s1.tsx';
import s2 from './scenes/s2.tsx';
import s3 from './scenes/s3.tsx';
import s4 from './scenes/positioning.tsx';
import presentation from './scenes/presentation.tsx';

export default makeProject({
// scenes: [example, s1],
  scenes: [s1, s2, s3, s4, presentation],
});
