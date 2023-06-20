import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

interface IContainer {
  size: string;
}

export const Container = styled.div<IContainer>`
  position: relative;
  overflow-x: hidden;
  background: ${variables.colors.black_850};
  border-radius: 4px;
  margin-right: 8px;
  ${(props) => {
    switch (props.size) {
      case 'lg':
        return `
					width: 100%;
					height: 54px;
				`;
      case 'md':
        return `
					width: 150px;
					height: 48px;
				`;
      case 'sm':
        return `
					width: 75px;
					height: 36px;
				`;
    }
  }};
`;
