import green from '@material-ui/core/colors/green'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8c7d62',
      main: '#c8b48c',
      dark: '#d3c3a3',
      contrastText: '#fff',
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})

export default theme
