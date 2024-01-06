import {
  Node, NodeProps,
  colorSignal,
  initial, signal,
  Circle, Rect,
  Layout, Txt, Img
} from '@motion-canvas/2d';

import {
  Color, ColorSignal,
  PossibleColor,
  SignalValue,
  SimpleSignal,
  createSignal,
  createRef,
  all,
  easeInOutCubic,
  tween,
} from '@motion-canvas/core';

import { useLogger } from '@motion-canvas/core/lib/utils';


export interface TextIconBoxProps extends NodeProps {
  initialState?: SignalValue<boolean>;
  theLabel?: SignalValue<string>;
  theSrc?: SignalValue<string>;
  accent?: SignalValue<PossibleColor>;
}

export class TextIconBox extends Node {
  @initial(false)
  @signal()
  public declare readonly initialState: SimpleSignal<boolean, this>;

  @initial('NO LABEL GIVEN')
  @signal()
  public declare readonly theLabel: SimpleSignal<string, this>;

  @initial(null)
  @signal()
  public declare readonly theSrc: SimpleSignal<string, this>;

  @initial('#68ABDF')
  @colorSignal()
  public declare readonly accent: ColorSignal<this>;

  private isOn: boolean;
  private readonly indicatorPosition = createSignal(0);
  private readonly offColor = new Color('#242424');
  private readonly indicator = createRef<Circle>();
  private readonly container = createRef<Rect>();

  public constructor(props?: TextIconBoxProps) {
    super({
      ...props,
    });

    this.isOn = this.initialState();
    this.indicatorPosition(this.isOn ? 50 : -50);
  const logger = useLogger();
logger.info('label: ' + this.theLabel());
logger.info('src: ' + this.theSrc());

    this.add(
 <Layout layout gap={20} alignItems={'center'}>
      <Rect fill={'#f3303f'} padding={20} gap={20}>
        <Txt fill={'white'}>{this.theLabel()}</Txt>
      </Rect>
 <Img
      src={this.theSrc()}
      height={100}
      radius={20}
    />

    </Layout>
    );

/*
    this.add(
 <Layout layout gap={20} alignItems={'center'}>
      <Txt fill={'white'}>Example</Txt>
      <Rect fill={'#f3303f'} padding={20} gap={20}>
        <Txt fill={'white'}>{this.theLabel()}</Txt>
        <Circle size={60} fill={'#FFC66D'} />
        <Txt fill={'white'}>!!!</Txt>
      </Rect>
 <Layout layout gap={20} alignItems={'center'}>
      <Txt fill={'white'}>Example</Txt>
      <Rect
        ref={this.container}
        fill={this.isOn ? this.accent() : this.offColor}
        size={[200, 100]}
        radius={100}
      >
        <Circle
          x={() => this.indicatorPosition()}
          ref={this.indicator}
          size={[80, 80]}
          fill="#ffffff"
        />
      </Rect>,
    </Layout>
    </Layout>
    );
*/

  }

  public *toggle(duration: number) {
    yield* all(
      tween(duration, value => {
        const oldColor = this.isOn ? this.accent() : this.offColor;
        const newColor = this.isOn ? this.offColor : this.accent();

        this.container().fill(
          Color.lerp(oldColor, newColor, easeInOutCubic(value)),
        );
      }),

      tween(duration, value => {
        const currentPos = this.indicator().position();

        this.indicatorPosition(
          easeInOutCubic(value, currentPos.x, this.isOn ? -50 : 50),
        );
      }),
    );
    this.isOn = !this.isOn;
  }
}
