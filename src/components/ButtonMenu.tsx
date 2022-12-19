import MenuSvg from '../assets/menu.svg';
import { Button } from './Button';

export function ButtonMenu() {
  return (
    <Button transparent title="Menu">
      <img src={MenuSvg} alt="Menu" height={24} />
    </Button>
  );
}
