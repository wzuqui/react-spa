import { styled } from '@stitches/react';

import MenuSvg from '../assets/menu.svg';
import { Button as ButtonBase } from './Button';

export function ButtonMenu() {
  return (
    <Button transparent title="Menu">
      <img src={MenuSvg} alt="Menu" />
    </Button>
  );
}

const Button = styled(ButtonBase, {
  height: 24,
  img: {
    height: 24,
  },
});
