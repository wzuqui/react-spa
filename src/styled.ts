import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: {
      primary: '#5454A0',
      gray500: 'hsl(206,10%,76%)',
      blue500: 'hsl(206,100%,50%)',
      purple500: 'hsl(252,78%,60%)',
      green500: 'hsl(148,60%,60%)',
      red500: 'hsl(352,100%,62%)',
    },
    fonts: {
      normal: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    fontWeights: {},
    fontSizes: {
      1: '12px',
      2: '14px',
    },
    letterSpacings: {},
    lineHeights: {},
    radii: {
      round: '8px',
    },
    shadows: {
      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    },
    sizes: {},
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    transitions: {},
    zIndices: {},
  },
});
