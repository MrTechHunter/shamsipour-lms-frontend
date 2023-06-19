import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface I_TwoSlider {
  rtl?: boolean;
  step?: number;
  min?: number;
  max: number;
  values: number[];
  onChange?: (props: any) => void;
  isInfinity?: boolean;
}

const TwoSlider: React.FC<I_TwoSlider> = (props) => {
  const { rtl = true, step = 1, min = 1, max = 0, values = [0, 0], onChange = () => false, isInfinity } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '12px',
        padding: '0 12px',
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={min === max ? max + 1000 : max}
        rtl={rtl}
        onChange={onChange}
        renderTrack={(params: {
          props: {
            style: React.CSSProperties;
            ref: React.RefObject<any>;
            onMouseDown: (e: React.MouseEvent) => void;
            onTouchStart: (e: React.TouchEvent) => void;
          };
          children: React.ReactNode;
          isDragged: boolean;
          disabled: boolean;
        }) => (
          <div
            onMouseDown={params.props.onMouseDown}
            onTouchStart={params.props.onTouchStart}
            style={{
              ...params.props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={params.props.ref}
              style={{
                height: '2px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#cb97fa', '#A951F7', '#cb97fa'],
                  min: min,
                  max: min == max ? max + 1000 : max,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {params.children}
            </div>
          </div>
        )}
        renderThumb={(params: {
          props: {
            key: number;
            style: React.CSSProperties;
            tabIndex?: number;
            'aria-valuemax': number;
            'aria-valuemin': number;
            'aria-valuenow': number;
            draggable: boolean;
            role: string;
            onKeyDown: (e: React.KeyboardEvent) => void;
            onKeyUp: (e: React.KeyboardEvent) => void;
          };
          value: number;
          index: number;
          isDragged: boolean;
        }) => {
          return (
            <div
              {...params.props}
              style={{
                ...params.props.style,
                height: '10px',
                width: '10px',
                borderRadius: '4px',
                backgroundColor: '#A951F7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
                cursor: 'auto',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  padding: '2px 8px',
                  borderRadius: '2px',
                  backgroundColor: '#A951F7',
                  cursor: 'auto',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    top: '-2px',
                    right: 'calc(50% - 3px)',
                    backgroundColor: '#A951F7',
                    zIndex: -1,
                    content: ' ',
                    transform: 'rotate(45deg)',
                    borderRadius: '1px',
                  }}
                />
                {isInfinity && params.index === 1 ? '∞' : values[params.index]}
              </div>
              <div
                style={{
                  height: '5px',
                  width: '5px',
                  backgroundColor: params.isDragged ? '#A951F7' : '#A951F7',
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default TwoSlider;
