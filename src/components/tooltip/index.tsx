import React, { useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import { Container, ToolTip } from './style';

const titleContent = (data?: string | number) => <ToolTip>{data}</ToolTip>;

const Tooltip = ({ children }: { children?: string | number }) => {
  const tippyRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const show: () => void = () => setVisible(true);
  const hide: () => void = () => setVisible(false);
  return (
    <div>
      <Tippy
        ref={tippyRef}
        interactive={true}
        placement="bottom-end"
        content={titleContent(children)}
        visible={visible}
        appendTo={document.body}
        delay={0}
        duration={0}
      >
        <Container onMouseEnter={show} onMouseLeave={hide} className="text-ellipsis overflow-hidden">
          {children}
        </Container>
      </Tippy>
    </div>
  );
};

export default Tooltip;
