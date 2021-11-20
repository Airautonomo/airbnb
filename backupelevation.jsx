import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import CenteredTabs from '../CenteredTabs'
import PropTypes from 'prop-types'

import useScrollTrigger from '@mui/material/useScrollTrigger'

import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import InputBase from '@mui/material/InputBase'

import LanguageIcon from '@mui/icons-material/LanguageSharp';
import useStyles from './styles'
import { useTheme } from '@mui/styles';
import CompanyLogo from '../CompanyLogo'


function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

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


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));





ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <ElevationScroll {...props}>
        <AppBar className={classes.search}>
          <Toolbar>
            <Box className={classes.left} >
              <CompanyLogo />
            </Box >
            <Box
              sx={{ flex: 1 }}
              className={classes.center}>

              <StyledInputBase >
                <Search />
              </StyledInputBase>
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

          </Toolbar>
        </AppBar>
      </ElevationScroll>


    </React.Fragment>
  );
}