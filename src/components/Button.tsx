import { styled } from '../styled';

export const Button = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  cursor: 'pointer',

  '&:hover': {
    filter: 'opacity(0.8)',
  },

  '&:active': {
    filter: 'grayscale(20%)',
  },

  variants: {
    color: {
      red: {
        color: '#d21c1c',
      },
    },
    transparent: {
      true: {
        border: '0',
        background: 'transparent',
      },
    },
  },
});
