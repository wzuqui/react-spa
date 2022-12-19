import { Button } from './Button';

import LogoSvg from '../assets/logo.svg';

export function ButtonLogo() {
  return (
    <Button transparent style={{ marginLeft: 16 }} title="Logo">
      <img src={LogoSvg} alt="Logo" height={24} />
    </Button>
  );
}
