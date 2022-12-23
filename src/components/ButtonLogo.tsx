import { styled } from '@stitches/react';

import LogoSvg from '../assets/logo.svg';
import { Button as ButtonBase } from './Button';
import { Image as ImageBase } from './Image';

interface ButtonLogoProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonLogo(props: ButtonLogoProps) {
  return (
    <Button
      onClick={props.onClick}
      title="Logo"
      transparent
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
