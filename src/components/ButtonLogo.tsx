import { styled } from '@stitches/react';

import LogoSvg from '../assets/logo.svg';
import { Button as ButtonBase } from './Button';
import { Image as ImageBase } from './Image';

export function ButtonLogo() {
  return (
    <Button
      transparent
      title="Logo"
      type="button"
    >
      <Image
        src={LogoSvg}
        alt="Logo"
      />
    </Button>
  );
}

const Button = styled(ButtonBase, {
  marginLeft: 16,
  marginRight: 16,
});

const Image = styled(ImageBase, {
  height: 24,
});
