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


export default makeScene2D(function* (view) {
  const label = createRef<Txt>();
  const size = createSignal(1);
  const rects: Rect[] = [];
  const animate = (from: number, to: number) => () => map(from, to, size());

  const line1 = createRef<Line>();
  const dns = createRef<TextIconBox>();
  const k8s = createRef<TextIconBox>();
  const pc = createRef<TextIconBox>();



  view.add(
    <>

      <TextIconBox 
        ref={dns}
        position={[50, -50]}
        initialState={true}
        theLabel={'DNS'}
        theSrc={"http://l03.g1/dns.png"}
      />

      <TextIconBox 
        ref={k8s}
        position={[0, 100]}
        initialState={true}
        theLabel={'K8S'}
        theSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/128px-Kubernetes_logo_without_workmark.svg.png"}
      />

      <TextIconBox 
        position={[300, 100]}
        initialState={true}
        theLabel={'k3d'}
        theSrc={"http://l03.g1/k3d.png"}
      />

      <TextIconBox 
        position={[300, 200]}
        initialState={true}
        theLabel={'blokada'}
        theSrc={"http://l03.g1/blokada.png"}
      />

      <TextIconBox 
        ref={pc}
        position={[300, 500]}
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
      startArrow
        lineDash={[20, 20]}
    />,


      <Line
        position={[200, 200]}
        stroke={'#666'}
        lineWidth={8}
        endArrow
        startOffset={100}
        lineDash={[20, 20]}
        lineDashOffset={200}
        endOffset={200}
        end={0}
        radius={480}
        points={[
          [pc().position().x, pc().position().y],
          [dns().position().x, dns().position().y],
        ]}
      />
    </>,
  );

    const logger = useLogger();
    logger.info('dns x: ' + dns().x());
    logger.info('dns y: ' + dns().y());

/*
      <Line
        ref={line1}
        position={icon1().position}
        stroke={'#666'}
        lineWidth={8}
        endArrow
        startOffset={() => (240 / 2) * icon1().scale.x() + 20}
        lineDash={[20, 20]}
        lineDashOffset={() => (240 / 2) * k8s().scale.x() + 20}
        endOffset={200}
        end={0}
        radius={480}
        points={[
          [0, 0],
          [480, 480],
          [960, 0],
        ]}
      />
*/


/*

  theSrc={"http://l03.g1/blokada2.png"}
  theSrc={"https://images.unsplash.com/photo-1679218407381-a6f1660d60e9"}
  theSrc={"http://nginx/blokada.png"}
  theSrc={"http://l02.g1/blokada.png"}
  theSrc={"http://nginx/blokada2.png"}
  theSrc={"https://blokada.org/img/blokada-thumb.png"}
  theSrc={"http://wiki.g1/lib/tpl/dokuwiki/images/logo.png"}

*/


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
