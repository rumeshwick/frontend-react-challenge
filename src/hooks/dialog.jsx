import React, { useState, useRef, useEffect } from 'react';

export const ModalBase = React.forwardRef(
  ({ isOpen, onClosed, children }, ref) => {
    return isOpen ? (
      <>
        <div className='Modal-blanket' onClick={onClosed} />
        <div className='Modal-body' ref={ref}>
          <h3>Learn more about this user</h3>
          <div>{children}</div>
        </div>
      </>
    ) : null;
  }
);

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  // const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   console.log(`Sent scroll position: ${scroll} to analytics`);
  // }, [scroll]);

  const handleScroll = () => {
    console.log(`Sent scroll position: ${ref.current?.scrollTop} to analytics`);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element || !isOpen) return;
    console.log('came here');

    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const Dialog = (props) => (
    <ModalBase onClosed={close} isOpen={isOpen} ref={ref} {...props} />
  );

  return {
    isOpen,
    Dialog,
    open,
    close,
  };
};
