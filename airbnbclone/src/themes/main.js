import { createTheme } from '@mui/material/styles'

const spacing = (factor) => factor * 8

const theme = createTheme({
  spacing,
  palette: {
    primary: {
      main: '#ff385c',

    },
    secondary: {
      main: '#71717f',
    },
    common: {
      white: '#fff',
      black: '#000',
    },
    background: {
      paper: '#ffffff',
      default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontFamily: 'Ubuntu Mono',
    },
    h2: {
      fontFamily: 'Ubuntu Mono',
    },
    h3: {
      fontFamily: 'Ubuntu Mono',
    },
    h4: {
      fontFamily: 'Ubuntu Mono',
    },
    h6: {
      fontFamily: 'Ubuntu Mono',
    },
    h5: {
      fontFamily: 'Ubuntu Mono',
    },
    subtitle1: {
      fontFamily: 'Ubuntu Mono',
    },
    subtitle2: {
      fontFamily: 'Ubuntu Mono',
    },
    button: {
      fontFamily: 'Ubuntu Mono',
      fontWeight: 900,
    },
    overline: {
      fontFamily: 'Ubuntu Mono',
    },
  },
  props: {
    MuiAppBar: {
      color: 'default',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 4,
  },

})


export default theme