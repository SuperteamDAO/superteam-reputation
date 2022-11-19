import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  border: '2px dashed',
  borderRadius: 0,
  fontWeight: 'semibold',
});

const primary = defineStyle({
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'semibold',
  background: '#2A46D9',
  color: 'white',
  _hover: {
    transition: 'background 0.3s ease',
    background: '#0022D6',
  },
  _active: {
    transition: 'background 0.3s ease',
    background: '#0022D6',
  },
});

export const Button = defineStyleConfig({
  variants: { outline, primary },
});
