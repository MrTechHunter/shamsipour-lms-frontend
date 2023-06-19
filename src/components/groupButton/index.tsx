import React, { useRef, useState } from 'react';
import { Container, Button, Menu, Item, Icon, TinyContainer, TinyButton, TinyIcon, TinyMenu, TinyItem } from './style';
import CloseableArea from '../../components/closeableArea';
import GroupButtonSkeleton from './skeletonButtonGroup';
import Tippy from '@tippyjs/react';

/**
 * A group-button component with ability to change its color and size.
 * @param {string} text.
 * @param {string} type primary, outline.
 * @param {boolean} loading Show Loading... on button until it's true and while loading is true the button event is disabled.
 * @param {boolean} disabled Disable button click handler method and change some button styles'.
 * @param {function} onSubmit Fired when the button clicked'.
 * @param {array} options An array of object to list the items of menu {[ { key: 'sth that show to user', value: 'sth that send to the server' } ]}'.
 * @example
 * <GroupButton
 * type="primary"
 * text="Lorem ipsum dolor."
 * disabled={false}
 * onSubmit={() => alert('submit')}
 * loading={false}
 * options={[ { key: 'Active', value: 'active' }, { key: 'Inactive', value: 'inactive' } ]}
 * />
 * */

interface IGroupButton {
  onSubmit: (p: string) => void | any;
  disabled: boolean;
  options: { value: string; label: string }[];
  type: string;
  text?: string;
  loading: boolean;
  variant?: string;
  title?: string;
  color?: string;
  icon?: string;
}

const GroupButton = ({
  onSubmit,
  disabled,
  title,
  options,
  type,
  text,
  loading,
  icon,
  color,
  variant = 'primary',
}: IGroupButton) => {
  const [showMenu, toggleMenu] = useState(false);
  const tippyRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const dropDownContent = (
    <>
      {visible && (
        <>
          <CloseableArea onClick={hide} />
          <TinyMenu>
            {options.map((item: { value: string; label: string }, key: number) => {
              return (
                <TinyItem
                  onClick={() => {
                    onSubmit(item.value);
                    setVisible(false);
                  }}
                  key={item.label + key}
                >
                  {item.label}
                </TinyItem>
              );
            })}
          </TinyMenu>
        </>
      )}
    </>
  );

  if (variant === 'primary') {
    if (!loading) {
      return (
        <Container>
          <Button color={type} type="button" disabled={disabled} onClick={() => toggleMenu(!showMenu)}>
            <Icon showMenu={showMenu} type={type} />
            {text}
          </Button>
          {showMenu && (
            <>
              <CloseableArea onClick={() => toggleMenu(false)} />
              <Menu>
                {options.map((item: { value: string; label: string }, key: number) => {
                  return (
                    <Item
                      onClick={() => {
                        onSubmit(item.value);
                        toggleMenu(false);
                      }}
                      key={item.label + key}
                    >
                      {item.label}
                    </Item>
                  );
                })}
              </Menu>
            </>
          )}
        </Container>
      );
    } else {
      return <GroupButtonSkeleton />;
    }
  } else {
    if (!loading) {
      return (
        <>
          <TinyContainer>
            <Tippy
              ref={tippyRef}
              interactive={true}
              placement="bottom-end"
              content={dropDownContent}
              visible={visible}
              onClickOutside={hide}
              appendTo={document.body}
            >
              <TinyButton color={type} type="button" disabled={disabled} onClick={visible ? hide : show}>
                <i
                  className={`${icon} w-10 h-10 hover:bg-surface rounded flex justify-center items-center text-base ${
                    color ? color : 'text-black_87'
                  } ${disabled ? 'text-black_38' : ''}`}
                  title={title}
                />
                <TinyIcon className="me-Caret-down" visible={visible} type={type} />
              </TinyButton>
            </Tippy>
          </TinyContainer>
        </>
      );
    } else {
      return <GroupButtonSkeleton />;
    }
  }
};
export default GroupButton;
