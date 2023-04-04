import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from '../theme/components/button';
import { tabsTheme } from '../theme/components/tabs';
import { Tag } from '../theme/components/tag';
import { fonts } from '../theme/fonts';
import { styles } from '../theme/styles';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors: {
    superteamBlack: {
      100: '#000000',
    },
    superteamGreyLT: {
      25: '#FCFCFC',
      50: '#F7F7F9', // light mode navbar bg
      100: '#F2F2F2',
      200: '#F0F0F0',
      300: '#EBEBEB',
      400: '#E6E6E6',
      500: '#E0E0E0',
      600: '#D6D6D6',
      700: '#BDBDBD',
      800: '#A3A3A3',
      900: '#8A8A8A',
    },
    superteamGreyDT: {
      25: '',
      50: '#252931',
      100: '#707070',
      200: '#575757',
      300: '#545454',
      400: '#4D4D4D',
      500: '#404040',
      600: '#3B3B3B',
      700: '#383838',
      750: '#252931',
      800: '#1F1F1F',
      900: '#161A22',
      1000: '#0E1218',
      1100: '#040404',
    },
    superteamBlueLT: {
      100: '#E5E6FF',
      200: '#D6D8FF',
      300: '#A3A7FF',
      400: '#7076FF',
      500: '#535AFF',
      800: '#0022D6',
      900: '#0007B8',
    },
    superteamBlueDT: {
      50: '#DCDEF6',
      100: '#202442',
      200: '#1B2047',
      300: '#161C4C',
      400: '#111951',
      500: '#0C1556',
      800: '#535AFF',
    },
    superteamAquaBlueLT: {
      100: '#DAF8FF',
      200: '#A3EEFF',
      300: '#70E5Ff',
      400: '#3DDCFF',
      500: '#0BD3FF',
      800: '#005C70',
    },
    superteamAquaBlueDT: {
      100: '#193A48',
      200: '#143C4D',
      300: '#103E51',
      400: '#0B4056',
      500: '#054433',
    },
    superteamRedLT: {
      100: '#FFDAEA',
      200: '#FFA3CA',
      300: '#FF70AC',
      400: '#FF3D8F',
      500: '#FF0B71',
      800: '#A30045',
    },
    superteamRedDT: {
      100: '#3A182D',
      200: '#5E2749',
      300: '#823665',
      400: '#A64581',
      500: '#BD609A',
    },
    superteamGreenLT: {
      100: '#D9F8E9',
      200: '#6BFFB8',
      300: '#38FFA0',
      400: '#05FF87',
      500: '#00CF6C',
      800: '#00381D',
    },
    superteamGreenDT: {
      100: '#14352C',
    },
    superteamBlue: {
      50: '#E0E4FA',
      300: '#A3A5FF',
      500: '#0022D6',
      800: '#131839',
    },
    superteamCyan: {
      50: '#E0EEF1',
      100: '#163642',
      300: '#00C3F0',
      500: '#00708A',
      800: '#132B37',
    },
    superteamGreen: {
      50: '#E0EFE8',
      100: '#14352C',
      300: '#14D7A0',
      500: '#007A40',
      700: '#00A67E',
      800: '#162F30',
    },
    superteamPink: {
      50: '#EDC2EC',
      300: '#FF61FA',
      500: '#B602B0',
      800: '#1F0D26',
    },
    superteamPurple: {
      50: '',
      100: '#F5DBFF',
      200: '#E7A3FF',
      300: '#DA70FF',
      400: '#CD3DFF',
      500: '#BF0BFF',
      800: '#700099',
    },
    superteamRed: {
      50: '#EEC2D4',
      300: '#FF75AF',
      500: '#B8004D',
      800: '#210D1C',
    },
    superteamYellow: {
      50: '#F3EBE0',
      100: '#3A3B1E',
      300: '#F8B535',
      500: '#9E5C00',
      800: '#3D2900',
    },
    superteamOrange: {
      50: '#F8EDD9',
      100: '#332A1C',
      700: '#FFCA0D',
      800: '#F6A50B',
      900: '#CD8700',
    },
    superteamTusk: {
      50: '#F5FFDE',
      100: '#303C22',
      800: '#BAFF26',
    },
    superteamBrown: {
      300: '#BE8A79',
    },
    superteamErrorDM: '#EF4444',
    superteamErrorLM: '#D32F2F',
    superteamSuccessDM: '#22C55E',
    superteamSuccessLM: '#388E3C',
    superteamSurfacePrimaryDM: '#0E1218',
    superteamSurfacePrimaryLM: '#FFFFFF',
    superteamSurfaceSecondaryDM: '#161A22',
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
