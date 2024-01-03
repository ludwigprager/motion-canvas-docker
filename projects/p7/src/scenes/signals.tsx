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
      <Circle
        scale={0}
        ref={circle}
        width={240}
        height={240}
        fill={'#68ABDF'}
      />
      <Rect
        ref={square}
        x={480}
        width={240}
        height={240}
        fill={'#ff6470'}
        radius={8}
        scale={0}
      />
      <Line
        ref={arrow}
        position={circle().position}
        stroke={'#666'}
        lineWidth={8}
        endArrow
        startOffset={() => (240 / 2) * circle().scale.x() + 20}
        lineDash={[20, 20]}
        lineDashOffset={() => (240 / 2) * circle().scale.x() + 20}
        endOffset={200}
        end={0}
        radius={480}
        points={[
          [0, 0],
          [960, 0],
        ]}
      />
    </>,
  );

//yield* waitUntil('circle');
  yield* circle().scale(1.5, 0.5, easeOutCubic);

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
});
