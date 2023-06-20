import React from 'react';
import { TimePickerContainer, CloseableAreaWrapper } from './style';
import { isEqual } from 'lodash';

type InputFieldProps = any;

class CustomTimePicker extends React.Component<InputFieldProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      timePicker: false,
      minutes: 0,
      originMinutes: 0,
      minute: 0,
      hour: 0,
      rizeUp: '',
    };
  }
  static getDerivedStateFromProps(props: any, state: any) {
    const result: any = [];
    if (
      !isEqual(props.value, state.originMinutes) &&
      props.value !== undefined &&
      props.value !== null &&
      props.value !== ''
    ) {
      result.minute = parseInt(props.value) % 60;
      result.hour = Math.floor(parseInt(props.value) / 60);
      result.minutes = props.value;
      result.originMinutes = props.value;
    }
    if (props.value === '' || props.value === null) {
      result.minute = 0;
      result.hour = 0;
    }
    return result;
  }
  showTimePicker(state: any) {
    const element: any = document.querySelector('.time-picker-text-container');
    const domRect: any = element.getBoundingClientRect();
    let rizeUp = false;
    if (window.innerHeight - domRect.bottom < 104) {
      rizeUp = true;
    } else if (window.innerHeight - domRect.top < 104) {
      rizeUp = false;
    } else {
      rizeUp = false;
    }
    const { minute, hour }: any = this.state;
    if (!state) {
      const hor: any = hour * 60;
      const result: any = minute + hor;
      this.props.onChange(result === 0 ? 0 : result);
    }
    this.setState({ timePicker: state, rizeUp });
  }
  hourClickHandler(hour: any) {
    let _hour = hour;
    if (_hour === 24) {
      _hour = 0;
    }
    if (_hour < 0) {
      _hour = 23;
    }
    this.setState({ hour: _hour });
  }
  minuteClickHandler(minute: number) {
    let _minute = minute;
    if (_minute === 60) {
      _minute = 0;
    }
    if (_minute < 0) {
      _minute = 55;
    }
    this.setState({ minute: _minute });
  }
  render() {
    const { timePicker, minute, hour, minutes, rizeUp }: InputFieldProps = this.state;
    return (
      <TimePickerContainer active={timePicker} rizeUp={rizeUp} className="no-select">
        <CloseableAreaWrapper
          show={timePicker}
          onClick={(e) => {
            e.preventDefault();
            this.props.blurHandler(e);
            return this.showTimePicker(false);
          }}
        />
        <div className="time-picker-text-container">
          <input
            onFocus={(e) => {
              this.showTimePicker(true);
              this.props.focusHandler(e);
            }}
            className="digital-clock"
            // value={minutes !== null || minutes !== 0 || minute !== 0 || hour !== 0 ? `${hour} : ${minute}` : ''}
            value={hour === 0 && minute === 0 ? '' : `${hour} : ${minute}`}
            onChange={() => false}
            name={this.props.name}
            readOnly
          />
        </div>
        {timePicker && (
          <div className="time-container">
            <div className="time-picker-col">
              <i
                className="time-icon icon-up me-Caret-down no-select"
                onClick={(e) => {
                  e.preventDefault();
                  this.minuteClickHandler(minute + 5);
                }}
              />
              <div className="time-digit">{minute}</div>
              <i
                className="time-icon me-Caret-down no-select"
                onClick={(e) => {
                  e.preventDefault();
                  this.minuteClickHandler(minute - 5);
                }}
              />
            </div>
            <div className="time-picker-separator">:</div>
            <div className="time-picker-col">
              <i
                className="time-icon icon-up me-Caret-down no-select"
                onClick={(e) => {
                  e.preventDefault();
                  this.hourClickHandler(hour + 1);
                }}
              />
              <div className="time-digit">{hour}</div>
              <i
                className="time-icon me-Caret-down no-select"
                onClick={(e) => {
                  e.preventDefault();
                  this.hourClickHandler(hour - 1);
                }}
              />
            </div>
          </div>
        )}
      </TimePickerContainer>
    );
  }
}

export default CustomTimePicker;
