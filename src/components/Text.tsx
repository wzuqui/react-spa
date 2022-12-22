import { styled } from '@stitches/react';

export const Text = styled('p', {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
});
