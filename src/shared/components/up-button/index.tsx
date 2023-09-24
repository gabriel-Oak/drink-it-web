'use client';
import { Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FC, useEffect, useState } from 'react';
import { Button } from './styles';
import debounce from '../../utils/debounce';

const UpButton: FC = () => {
  const [showUpButton, setShowUpButton] = useState(false);
  const { transitions: { duration } } = useTheme();
  const transitionDuration = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen,
  };

  const onScroll = debounce(() => {
    if (window?.scrollY > window.innerHeight && !showUpButton)
      return setShowUpButton(true);
    if (window?.scrollY < window.innerHeight && showUpButton)
      setShowUpButton(false);
  }, 80);

  useEffect(() => {
    window?.addEventListener('scroll', onScroll as any);
    return () => window?.removeEventListener('scroll', onScroll as any);
  }, [onScroll]);

  return (
    <Zoom
      in={showUpButton}
      timeout={transitionDuration}
      unmountOnExit
    >
      <Button
        color="secondary"
        onClick={() => scrollTo(0, 0)}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Zoom>
  );
}

export default UpButton;