import React, { cloneElement, useEffect } from 'react';
import { ModalWrapper, Container } from './style';
import CloseableArea from '../closeableArea';

interface IModal {
  show?: boolean;
  closeHandler?: () => void;
  loading?: boolean;
  title?: string;
  clickHandler?: () => void;
  size?: string;
  type?: string;
  modalIcon?: boolean;
  children?: any;
}

const Modal = (props: IModal) => {
  const { show, closeHandler, children, loading, size, type, modalIcon = true } = props;
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);
  if (children && children.length && typeof children !== 'string') {
    const Header = cloneElement(
      children?.find((child: any) => child?.type?.displayName === 'ModalHeader'),
      { modalIcon, type }
    );
    const Body = cloneElement(
      children?.find((child: any) => child?.type?.displayName === 'ModalBody'),
      { type }
    );
    return (
      <ModalWrapper show={show}>
        <CloseableArea onClick={loading || !closeHandler ? () => false : () => closeHandler()} />
        <Container modalIcon={modalIcon} size={size} type={type}>
          {children && children?.find((child: any) => child?.type?.displayName === 'ModalHeader') && Header}
          {children && children?.find((child: any) => child?.type?.displayName === 'ModalBody') && Body}
          {children && children?.find((child: any) => child?.type?.displayName === 'ModalFooter')
            ? cloneElement(children?.find((child: any) => child?.type?.displayName === 'ModalFooter'))
            : null}
        </Container>
      </ModalWrapper>
    );
  } else if (children && typeof children === 'object' && typeof children !== 'string') {
    return (
      <ModalWrapper show={show}>
        <CloseableArea onClick={loading || !closeHandler ? () => false : () => closeHandler()} />
        <Container modalIcon={modalIcon} size={size} type={type}>
          {children && children?.type?.displayName === 'ModalHeader' && cloneElement(children, { modalIcon, type })}
          {children && children?.type?.displayName === 'ModalBody' && cloneElement(children, { type })}
          {children && children?.type?.displayName === 'ModalFooter' && cloneElement(children)}
        </Container>
      </ModalWrapper>
    );
  } else {
    return (
      <ModalWrapper show={show}>
        <CloseableArea onClick={loading || !closeHandler ? () => false : () => closeHandler()} />
        <Container modalIcon={modalIcon} size={size} type={type}>
          {children}
        </Container>
      </ModalWrapper>
    );
  }
};

Modal.displayName = 'Modal';

export default Modal;
