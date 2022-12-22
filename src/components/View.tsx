import { styled } from '@stitches/react';

export const View = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    alignItems: {
      flexStart: {
        alignItems: 'flex-start',
      },
    },
    column: {
      true: {
        flexDirection: 'column',
      },
    },
    full: {
      true: {
        height: '100%',
        width: '100%',
      },
    },
    gap: {
      '4px': {
        gap: '4px',
      },
      '8px': {
        gap: '8px',
      },
    },
  },
});
