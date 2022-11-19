import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    background: 'red',
    color: 'red',
    fontWeight: 'semibold', // change the font weight
  },
  tabpanel: {
    fontFamily: 'mono', // change the font family
  },
});

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle });
