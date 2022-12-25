import { styled } from '../styled';

export const Text = styled('p', {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
});
