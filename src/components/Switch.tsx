import { styled } from '../styled';

export function Switch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Input
      type="checkbox"
      {...props}
    />
  );
}

const Input = styled('input', {
  display: 'inline-block',
  width: '2rem',
  height: '1rem',
  borderRadius: '999px',
  margin: '0',
  padding: '0',
  verticalAlign: 'middle',

  appearance: 'none',
  boxSizing: 'border-box',
  background: 'rgb(204, 204, 204);',
  position: 'relative',
  cursor: 'pointer',

  '&::before': {
    width: '50%',
    height: '100%',
    borderRadius: '50%',
    right: '50%',
    margin: '0',
    padding: '0',

    content: '',
    display: 'block',
    background: 'rgb(153, 153, 153)',
    position: 'absolute',
    transition: 'right 100ms ease-in-out',
    boxSizing: 'border-box',
  },

  '&:checked::before': {
    right: '0%',
  },
});
