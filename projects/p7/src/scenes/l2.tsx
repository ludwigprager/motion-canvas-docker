import {makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {Layout, Rect, Txt, Circle} from '@motion-canvas/2d/lib/components';
import {createRef, makeRef, useScene} from '@motion-canvas/core/lib/utils';
import {map} from '@motion-canvas/core/lib/tweening';
import {createSignal} from '@motion-canvas/core/lib/signals';
import {Direction, Spacing} from '@motion-canvas/core/lib/types';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {TextIconBox} from '../TextIconBox';

export default makeScene2D(function* (view) {
  const label = createRef<Txt>();
  const size = createSignal(1);
  const rects: Rect[] = [];
  const animate = (from: number, to: number) => () => map(from, to, size());

  view.add(
    <>

<TextIconBox 
  initialState={true}
  theLabel={'DNS'}
  theSrc={"https://images.unsplash.com/photo-1679218407381-a6f1660d60e9"}
/>


    </>,
  );

  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    rect.lineWidth(8);
    rect.stroke(i === 4 ? '#99C47A' : '#242424');
    rect.radius(new Spacing(8));
  }

  yield* slideTransition(Direction.Bottom, 1);

//yield label().text('LAYOUTS', 2);
  yield size(0, 2).to(1, 6);

  yield* waitUntil('next');
  useScene().enterCanTransitionOut();
//yield* label().position.y(-320, 1);
});
