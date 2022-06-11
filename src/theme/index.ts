import { createTheme } from '@mui/material/styles';

import colors from './colors';

const typographyOptions = {
  caption: {
    fontSize: 16,
    letterSpacing: 0.4,
    fontWeight: 'bold',
    marginRight: 16,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
};

const theme = {
  breakpoints: {
    values: {
      xxs: 0,
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: colors.text.primary,
    },
    surface: colors.surface,
    divider: colors.divider,
    primary: colors.primary,
    border: colors.border,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ].join(),
    caption: typographyOptions.caption,
    title: typographyOptions.title,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '4px 16px',
          color: colors.text.secondary,
          width: 'auto'
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'widget' },
          style: {
            padding: 24,
          },
        },
      ],
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        },
      },
    },
  },
};

export default createTheme(theme as any);
