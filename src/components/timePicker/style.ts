import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface ITimePickerContainer {
  active: boolean;
  rizeUp: boolean;
}
interface ICloseableAreaWrapper {
  show: boolean;
  focus?: boolean;
}

export const TimePickerContainer = styled.div<ITimePickerContainer>`
  position: relative;
  width: 100%;
  .time-picker-text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
      height: 36px
    min-width: 147px;
    width: 100%;
    color: ${variables.colors.black_87};
    font-size: 18px;
    background-color: transparent;
    padding: 0;
    border-radius: 4px;
    ${(props) => {
      if (props.active) {
        return `
					border-radius: 4px 4px 0 0;
					border-bottom-color: #4d7ef8;
				`;
      }
    }}
    .digital-clock {
      text-align: center;
      direction: ltr;
      width: 100%;
      border: unset !important;
      outline: unset !important;
      font-size: 14px;
      color: ${variables.colors.black_87};
      height: inherit;
      background-color: transparent;
      z-index: 1;
    }
  }
  .time-container {
    z-index: 9999;
    position: absolute;
    ${(props) => {
      if (props.rizeUp) {
        return `bottom: calc(36px + 9px);`;
      } else {
        return `top: calc(36px + 9px);`;
      }
    }}
    left: 0;
    width: 100%;
    border: 1px solid #e4e7ea;
    border-radius: 0.25rem;
    height: 95px;
    -webkit-box-shadow: 0 2px 14px 0 #cccccc;
    -moz-box-shadow: 0 2px 14px 0 #cccccc;
    box-shadow: 0 2px 14px 0 #cccccc;
    background-color: #fcfcfc;
    display: flex;
    justify-content: center;
    align-items: center;
    .time-picker-separator {
      width: 30px;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${variables.colors.black_87};
      font-size: 20px;
      font-weight: 500;
    }
    .time-picker-col {
      padding-top: 5px;
      padding-bottom: 5px;
      width: 24px;
      height: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .time-icon {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: #f1f1f1;
          border-radius: 50%;
        }

        &:before {
          color: ${variables.colors.black_87};
          font-size: 24px;
          margin: 0;
        }
      }

      .icon-up {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .time-digit {
        color: ${variables.colors.black_87};
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
`;
export const CloseableAreaWrapper = styled.div<ICloseableAreaWrapper>`
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  ${(props) => {
    if (props.show) {
      return `display: block`;
    } else {
      return `display: none`;
    }
  }}
  ${(props) =>
    props.focus &&
    `&:before {
			width: 100%;
			height: 100%;
			content: '';
			margin-top: 64px;
			background-color: #fff;
			opacity: .5;
			position: fixed;
		}`}
`;
