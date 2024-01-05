import {makeScene2D} from '@motion-canvas/2d';
import {all, chain, delay, loop, waitUntil} from '@motion-canvas/core/lib/flow';
import {Circle, Node, Line, Rect, Txt} from '@motion-canvas/2d/lib/components';
import {
  createRef,
  makeRef,
  range,
  useRandom,
  useScene,
} from '@motion-canvas/core/lib/utils';
import {easeOutCubic, linear} from '@motion-canvas/core/lib/tweening';
import {cancel, join} from '@motion-canvas/core/lib/threading';


export default makeScene2D(function* (view) {
  const label = createRef<Txt>();
  const signals: Circle[] = [];
  const circleGroup = createRef<Node>();

  const circle = createRef<Circle>();
  const square = createRef<Rect>();
  const arrow = createRef<Line>();


  view.add(
    <>
      <Txt
        scale={0}
        width={240}
        height={240}
        fill={'#68ABDF'}
        ref={label}
        fontSize={120}
        lineHeight={120}
        fontFamily={'JetBrains Mono'}
      />
    </>,
  );

//yield* waitUntil('circle');
  yield label().text('LAYOUTS', 2);

  yield* label().scale(1.5, 0.5, easeOutCubic);

/*
//yield* waitUntil('square');
  yield* all(
    circle().position.x(-480, 0.6),
    square().scale(1.25, 0.6),
    arrow().end(1, 0.6),
  );

  yield* all(
    circle().position.x(-680, 3.6),
    square().scale(1.25, 3.6),
    arrow().end(3, 3.6),
  );

  yield* waitUntil('end');
  useScene().enterCanTransitionOut();
//yield* join(task2);
*/

});
