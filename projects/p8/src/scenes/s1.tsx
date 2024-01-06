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
import {all} from '@motion-canvas/core/lib/flow';



export default makeScene2D(function* (view) {
  const label = createRef<Txt>();
  const size = createSignal(1);
  const rects: Rect[] = [];
  const animate = (from: number, to: number) => () => map(from, to, size());

  const line1 = createRef<Line>();
  const dns = createRef<TextIconBox>();
  const pc = createRef<TextIconBox>();
  const facebook = createRef<TextIconBox>();



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
        points={[
          [pc().position().x, pc().position().y],
          [dns().position().x, dns().position().y],
        ]}
        stroke={'black'}
        lineWidth={8}
        radius={40}
        endArrow

        // example, setting it to 20 will make the first 20 pixels of the curve invisible.
        startOffset={100}
        // example, setting it to 20 will make the last 20 pixels of the curve invisible.
        endOffset={100}

        // A percentage from the start before which the curve should be clipped.
        // start={90}
        // A percentage from the start after which the curve should be clipped.
        end={0}

        lineDash={[20, 20]}
      />,

      <TextIconBox 
        ref={facebook}
        position={[0, 370]}
        initialState={true}
        theLabel={'facebook'}
        theSrc={"http://l03.g1/facebook.png"}
      />


    </>,
  );

    const logger = useLogger();
    logger.info('dns x: ' + dns().x());
    logger.info('dns y: ' + dns().y());

/*

  theSrc={"http://l03.g1/blokada2.png"}
  theSrc={"https://images.unsplash.com/photo-1679218407381-a6f1660d60e9"}
  theSrc={"http://nginx/blokada.png"}
  theSrc={"http://l02.g1/blokada.png"}
  theSrc={"http://nginx/blokada2.png"}
  theSrc={"https://blokada.org/img/blokada-thumb.png"}
  theSrc={"http://wiki.g1/lib/tpl/dokuwiki/images/logo.png"}


*/

yield *
  all(
    line1().start(50, 20)
  );

//  line1().endArrow = false;
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

//yield label().text('LAYOUTS', 2);
  yield size(0, 2).to(1, 6);

  yield* waitUntil('next');
  useScene().enterCanTransitionOut();
//yield* label().position.y(-320, 1);

*/
});
