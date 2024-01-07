import {makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {Layout, Rect, Txt, Circle, Line} from '@motion-canvas/2d/lib/components';
import {createRef, makeRef, useScene} from '@motion-canvas/core/lib/utils';
import {map} from '@motion-canvas/core/lib/tweening';
import {createSignal} from '@motion-canvas/core/lib/signals';
import {Direction, Spacing} from '@motion-canvas/core/lib/types';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {TextIconBox} from '../TextIconBox';
import { useLogger } from '@motion-canvas/core/lib/utils';
//import {all, chain, delay, loop, waitUntil} from '@motion-canvas/core/lib/flow';
import {all, chain, waitFor} from '@motion-canvas/core/lib/flow';



export default makeScene2D(function* (view) {
  const size = createSignal(1);
  const rects: Rect[] = [];
  const animate = (from: number, to: number) => () => map(from, to, size());

  const line1 = createRef<Line>();
  const line3 = createRef<Line>();
  const dns = createRef<TextIconBox>();
  const pc = createRef<TextIconBox>();
  const facebook = createRef<TextIconBox>();
  const text1 = createRef<Txt>();



  view.add(
    <>

      <TextIconBox 
        ref={dns}
        position={[-10, -400]}
        initialState={true}
        theLabel={'DNS'}
        theSrc={"http://l03.g1/dns.png"}
      />


      <TextIconBox 
        ref={pc}
        position={[-700, -10]}
        initialState={true}
        theLabel={'PC'}
        theSrc={"http://l03.g1/pc.png"}
      />

      <Line
        ref={line1}
        points={[ pc().position(), dns().position() ]}
        stroke={'black'}
        lineWidth={8}
        radius={40}
        endArrow

        // example, setting it to 20 will make the first 20 pixels of the curve invisible.
        startOffset={100}
        // example, setting it to 20 will make the last 20 pixels of the curve invisible.
        endOffset={100}

        // A percentage from the start before which the curve should be clipped.
        start={.1}
        // A percentage from the start after which the curve should be clipped.
        end={.1}

        lineDash={[20, 20]}
      />,


      <TextIconBox 
        ref={facebook}
        position={[0, 370]}
        initialState={true}
        theLabel={'facebook'}
        theSrc={"http://l03.g1/facebook.png"}
      />,

      <Txt
        ref={text1}
        position={[
          (dns().position().x + pc().position().x)/2,
          (dns().position().y + pc().position().y)/2,
        ]}
      />

      <Line
        ref={line3}
        points={[ dns().position(), facebook().position() ]}
        stroke={'black'}
        lineWidth={8}
        radius={40}
        endArrow
        startOffset={100}
        endOffset={100}
        start={.1}
        end={.1}
        lineDash={[20, 20]}
      />,



    </>,
  );

//  const logger = useLogger();

// Pfeil von pc -> dns
yield * chain(
    line1().points([pc().position(), dns().position()], 0),
    line1().end(.9, 2),
    text1().text('URL', .5)
);

yield* waitFor(5);

// Pfeil von dns -> pc
// 1. reset
yield * chain(
    text1().text('', 0),
    line1().points([dns().position(), pc().position()], 0),
    line1().start(.1,0),
    line1().end(.1,0),
);

yield * chain(
    line1().end(.1, 0),
    line1().end(.9, 2),
    text1().text('IP-Adresse', .5),
);

yield* waitFor(3);

// Pfeil von pc -> facebook
yield * chain(
    text1().text('', 0),
    line1().points([pc().position(), facebook().position()], 0),
    line3().start(.1,2),
    line3().end(.1,2),
    line3().end(.1, 2),
    line3().end(.9, 5),
);

//logger.info('line1: ' + JSON.stringify(line1()));

/*
    line1().startArrow(true, 1),
    line1().arrowSize(true, 1),
    line1().opacity(0, 1),
*/

//line1().startOffset = 100.0;
//line1().endArrow = true;
//line1().startArrow = false;
/*
yield * all(
    line1().opacity(0, 2),
);
yield * all(
    line1().opacity(1, 2),
);
*/

/*
yield * chain(
    line1().opacity(0, 1),
    line1().endArrow(false, 0),
    line1().startArrow(true, 0),
    line1().end(.1, 5),
);
*/
//  line1().startArrow(false,1)

/*
yield *
  all(
    line1().start(80, 5)
  );
*/


/*

  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    rect.lineWidth(8);
    rect.stroke(i === 4 ? '#99C47A' : '#242424');
    rect.radius(new Spacing(8));
  }

  yield* slideTransition(Direction.Bottom, 1);

  yield size(0, 2).to(1, 6);

  yield* waitUntil('next');
  useScene().enterCanTransitionOut();

*/
});
