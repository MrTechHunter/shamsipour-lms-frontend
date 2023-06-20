import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

interface IAccordion {
  notification: any;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  background: ${variables.colors.white};
`;
export const MessageContainer = styled.div`
  width: 100%;
`;
export const Item = styled.div<IAccordion>`
  padding: 14px 16px 12px 16px;
  margin: 0;
  width: 100%;
  min-height: ${(props: any) => (props.showText ? 'auto' : '77px')};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${variables.colors.gray_100};
  box-sizing: border-box;
  position: relative;
  ${(props) => {
    if (props.notification) {
      return `
			padding: 8px;
			flex-direction: column;
			`;
    } else {
      return `padding: 14px 16px 12px 16px`;
    }
  }};
`;
export const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${variables.colors.black_850};
`;
export const NotificationIcon = styled.i`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${variables.colors.black_850};
  &:before {
    color: ${variables.colors.white};
    font-size: 12px;
  }
`;
export const Message = styled.div<IAccordion>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: calc(100% - 145px);
  height: auto;
  ${(props) => {
    if (props.notification) {
      return `
				margin-right: 32px;
			`;
    }
  }};
`;
export const Title = styled.div`
  min-width: 39px;
  min-height: 19px;
  background-color: #ececec;
  border-radius: 4px;
  margin-bottom: 12px;
`;
export const NotificationTitle = styled.div`
  min-width: 39px;
  min-height: 19px;
  font-style: normal;
  font-weight: normal;
  font-size: ${variables.fontSize.h6};
  line-height: 19px;
  color: ${variables.colors.black_600};
  position: absolute;
  top: 8px;
  right: 40px;
`;
export const Text = styled.div<IAccordion>`
  min-height: 20px;
  background-color: #ececec;
  border-radius: 4px;
  ${(props) => {
    if (!props.notification) {
      return `
				margin-top: 12px;
				min-width: 249px;
			`;
    } else {
      return `
				min-width: 129px;
			`;
    }
  }};
`;
export const Date = styled.div<IAccordion>`
  width: 100px;
  min-width: 30px;
  min-height: 19px;
  line-height: 19px;
  background-color: #ececec;
  border-radius: 4px;
  ${(props) => {
    if (props.notification) {
      return `
				margin-right: 32px;
				margin-top: 8px;
			`;
    }
  }};
`;
export const Header = styled.div`
  width: 100%;
  min-height: 48px;
  background: #ececec;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 16px;
`;
export const HeaderTitle = styled.div`
  width: 74px;
  height: 24px;
  background-color: #fff;
  border-radius: 4px;
`;
