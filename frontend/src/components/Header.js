import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../assets/logo.png'
import { useStyles } from '../styles/classes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position='static'>
            <Toolbar>
              <img src={logo} alt='logo' className={classes.logo} />
              <Typography variant='h6' className={classes.title}>
                Photo Bucket
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Header
