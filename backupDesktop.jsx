import * as React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CenteredTabs from '../CenteredTabs'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/LanguageSharp';
import useStyles from './styles'
import { useTheme } from '@mui/styles';
import CompanyLogo from '../CompanyLogo'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // Override media queries injected by theme.mixins.toolbar
  [theme.breakpoints.down('sm')]: {
    minHeight: '164px',
    alignItems: 'center',
    justifyContent: 'center',
    flexdirection: 'column',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '.9rem',
}));

export default function DeskTopAppBar() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (

    <AppBar
      className={classes.nav}>
      <StyledToolbar
      >
        <Box className={classes.left} >
          <CompanyLogo />
        </Box >
        <Box
          sx={{ flex: 1 }}
          className={classes.center}>
          <CenteredTabs />
        </Box>
        <Box
          className={classes.right}
        >
          <StyledIconButton
            size='small'
            color="inherit"
            type="text">
            Become a host
          </StyledIconButton>
          <IconButton
            size="small"
            aria-label="search"
            label="search"
            color="inherit">
            <LanguageIcon
              fontSize='small'
            />
          </IconButton>
          <IconButton
            bgcolor="inherit"
            size="large"
            aria-label="search"
            color="inherit"
          >

            <MenuIcon />
            <AccountCircleIcon />

          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar >
  );
}