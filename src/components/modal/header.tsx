import React, { useState } from 'react';
import { Circle, CloseButtunIcon, Icon, Logo, Title, CloseButton } from './style';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/reducers/modal';

const ModalHeader = ({
  modalIcon,
  type = 'normal',
  children,
  closeable,
}: {
  modalIcon?: boolean;
  type?: string;
  children?: any;
  closeable?: any;
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {modalIcon && (
        <Circle type={type}>
          {type === 'delete' && <Icon className="lms-trash" />}
          {type === 'normal' && <Logo />}
        </Circle>
      )}
      <Title type={type}>
        <>
          {children}{' '}
          {closeable && (
            <CloseButton
              type={type}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <CloseButtunIcon type={type} className="lms-close" />
            </CloseButton>
          )}
        </>
      </Title>
    </>
  );
};

ModalHeader.displayName = 'ModalHeader';
export default ModalHeader;
