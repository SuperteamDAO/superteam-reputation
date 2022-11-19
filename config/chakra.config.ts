import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from '../theme/components/button';
import { fonts } from '../theme/fonts';
import { styles } from '../theme/styles';
import { tabsTheme } from '../theme/components/tabs';
import { Tag } from '../theme/components/tag';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    superteam_white: '#fff',
    superteam_black: {
      200: '#232A34', // table border color
      700: '#22252B',
      800: '#1C2028', // table hover/expanded/heading background
      900: '#171A21',
    },
    superteam_gray: {
      100: '#D5DBE0',
      200: '#BBCBDB',
      300: '#799BBE',
      400: '#495D72',
      500: '#45576A',
      600: '#545C6D',
      900: '#1E222A',
    },
    superteam_blue: {
      100: '#202442',
      800: '#8773ff',
      900: '#0022D6',
    },
    superteam_cyan: {
      100: '#163642',
      800: '#0BD3FF',
    },
    superteam_green: {
      100: '#14352C',
      700: '#00A67E',
      800: '#00CF6C',
    },
    superteam_pink: {
      100: '#3A1E41',
      800: '#FF34F7',
    },
    superteam_red: {
      100: '#3A182D',
      800: '#FF0B71',
    },
    superteam_yellow: {
      100: '#3A3B1E',
      800: '#FFF50B',
    },
    superteam_orange: {
      100: '#332A1C',
      700: '#FFCA0D',
      800: '#CD8700',
    },
    superteam_tusk: {
      100: '#303C22',
      800: '#BAFF26',
    },
    superteam_brown: {
      300: '#BE8A79',
    },
  },
  config,
  styles,
  fonts,
  components: {
    Button,
    Tag,
    Tabs: tabsTheme,
  },
});

export default theme;
