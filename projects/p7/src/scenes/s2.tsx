import {makeScene2D, Txt, Node, Rect, Layout} from '@motion-canvas/2d';
import {beginSlide, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(
    <>

<Layout direction={'column'} width={960} gap={40} layout
>
  <Node opacity={0.1}>
    <Rect height={240} fill={'#ff6470'} 

>
    </Rect>
    <Rect height={240} fill={'#ff6470'} >
    </Rect>
  </Node>
  <Rect height={240} fill={'#ff6470'} >
          <Txt 
            ref={title} 
            fill={'#68ABDF'}
            fontFamily={'JetBrains Mono'}
            scale={2}
          />
  </Rect>
</Layout>

      <Node
        position={[100, 100]}
        fill={'#68ABDF'}
        layout
      >
        <Rect
          opacity={.5}
          x={400}
          fill={'#242424'}
          height={640}
          width={640}
          layout
          direction={'column'}
          gap={20}
          z={-2}
          radius={8}
          padding={20}
        >
        </Rect>
      </Node>
    </>
  );

  title().text('FIRST SLIDE');
  yield* beginSlide('first slide');
  yield* waitFor(1); // try doing some actual animations here

  title().text('SECOND SLIDE');
  yield* beginSlide('second slide');
  yield* waitFor(1);

  title().text('LAST SLIDE');
  yield* beginSlide('last slide');
  yield* waitFor(1);
});
