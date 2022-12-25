import MenuSvg from '../assets/menu.svg';
import { styled } from '../styled';
import { Button as ButtonBase } from './Button';

interface ButtonMenuProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonMenu(props: ButtonMenuProps) {
  return (
    <Button
      onClick={props.onClick}
      title="Menu"
      transparent
      type="button"
    >
      <img
        src={MenuSvg}
        alt="Menu"
      />
    </Button>
  );
}

const Button = styled(ButtonBase, {
  height: 24,
  img: {
    height: 24,
  },
});
