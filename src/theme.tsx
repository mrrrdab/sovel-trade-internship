import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme.d';
import { Typography } from '@mui/material/styles/createTypography.d';
import StarIcon from '@mui/icons-material/Star';

declare module '@mui/material/styles' {
  interface Theme {
    typography: Typography & {
      font: {
        XXS: string;
        XS: string;
        S: string;
        M: string;
        L: string;
        XL: string;
      };
    };
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    font: {
      XXS: string;
      XS: string;
      S: string;
      M: string;
      L: string;
      XL: string;
    };
  }
}

// TODO (L): Spacings
export const THEME: Theme = createTheme({
  palette: {
    primary: {
      main: '#5073E1',
    },
    success: {
      main: '#2FD32F',
    },
    error: {
      main: '#D32F2F',
    },
    grey: {
      50: '#FAFAFA',
      400: '#B6B5B5',
    },
    text: {
      primary: '#333333',
      secondary: '#777777',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',

    font: {
      XXS: '0.5rem',
      XS: '0.75rem',
      S: '0.875rem',
      M: '1rem',
      L: '1.25rem',
      XL: '1.5rem',
    },
  },
  shape: {
    borderRadius: 2,
  },

  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '--input-bg-color': '#FAFAFA',
          '--input-border-color': '#B6B5B5',
          '--input-hover-bg-color': '#FFFFFF',
          '--input-focus-border-color': '#5073E1',

          '& .MuiOutlinedInput-input': {
            padding: '0.75em 1em',
            backgroundColor: 'var(--input-bg-color)',
            '&:hover': {
              backgroundColor: 'var(--input-hover-bg-color)',
            },
          },

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--input-border-color)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--input-border-color)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--input-focus-border-color)',
          },
        },

        multiline: {
          padding: 0,
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          '--asterisk-color': '#D32F2F',
        },

        asterisk: {
          color: 'var(--asterisk-color)',
          marginLeft: '0.1em',
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '--asterisk-color': '#D32F2F',
        },

        asterisk: {
          color: 'var(--asterisk-color)',
          marginLeft: '0.1em',
        },
      },
    },

    MuiRating: {
      defaultProps: {
        emptyIcon: <StarIcon />,
      },
    },
  },
});
