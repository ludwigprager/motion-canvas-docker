import {makeScene2D, Img} from '@motion-canvas/2d';
// ...
import {all, createRef} from '@motion-canvas/core';

import songPng from '../../images/song.png';

export default makeScene2D(function* (view) {
  view.add(<Img src={songPng} />);

const imageRef = createRef<Img>();

  view.add(<Img ref={imageRef} src={songPng} scale={2} />);

  yield* all(
    imageRef().scale(2.5, 1.5).to(2, 1.5),
    imageRef().absoluteRotation(90, 1.5).to(0, 1.5),
  );

});
