import React, { useState } from 'react';
import { Container } from './style';

interface I_Accordion {
  title?: string;
  children?: React.ReactNode;
  variant?: string;
  refresh?: any;
  hasIcon?: boolean;
  textColor?: string;
  height?: string;
  isContract?: boolean;
}
const Accordion = ({
  title = 'test title',
  children,
  variant = 'primary', // secondary
  refresh = false,
  hasIcon = true,
  textColor,
  height,
  isContract = false,
}: I_Accordion) => {
  const [close, toggle] = useState(false);
  if (variant === 'primary') {
    return (
      <Container color={variant}>
        <div className="h-6 w-full flex justify-between items-center gap-2">
          <i
            className={`${close ? 'lms-minus-square' : 'lms-plus-square'} cursor-pointer p-0.5 text-2xl text-primary`}
            onClick={() => toggle(!close)}
          />
          <div className="text-sm font-medium w-full text-blue_900 leading-6">{title}</div>
        </div>
        <div className={`${close ? 'block overflow-y-auto max-h-52' : 'hidden'} pt-1.5 w-full h-auto`}>{children}</div>
      </Container>
    );
  } else {
    return (
      <Container isContract={isContract} height={height}>
        <div className="h-6 w-full flex justify-between items-center">
          <div className={`text-sm font-medium ${textColor && textColor}`}>{title}</div>
          {hasIcon && (
            <div className="flex justify-between items-center">
              {refresh && (
                <i
                  className="lms-refresh_black_24dp-2 text-xl cursor-pointer p-0.5 text-primary"
                  onClick={() => refresh()}
                />
              )}
              <i
                className={`${close ? 'lms-expand' : 'lms-expand-right'} cursor-pointer p-0.5 text-primary`}
                onClick={() => toggle(!close)}
              />
            </div>
          )}
        </div>
        <div className={`${close && hasIcon ? 'block' : 'hidden'} ${refresh ? 'pt-5' : 'pt-1.5'} w-full h-auto`}>
          {children}
        </div>
      </Container>
    );
  }
};

export default Accordion;
