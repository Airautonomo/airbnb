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
import { CustomToggleButton } from '../CustomStyledComponents'
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // Override media queries injected by theme.mixins.toolbar
  [theme.breakpoints.down('sm')]: {
    minHeight: '164px',
    alignItems: 'center',
    justifyContent: 'center',
    flexdirection: 'column',
  },
  backgroundColor: [theme.palette.common.black,],
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '.9rem',
}));

const DoubleIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  fontSize: '.9rem',
  appearance: 'none !important',
  position: 'relative !important',
  backgroundColor: "#FFFFFF !important",
  border: '1px solid #DDDDDD !important',
  cursor: 'pointer !important',
  display: '-webkit-inline-box !important',
  display: '-moz-inline-box !important',
  display: '-ms-inline-flexbox !important',
  display: '-webkit-inline-flex !important',
  display: 'inline-flex !important',
  fontFamily: 'inherit !important',
  fontSize: 'inherit !important',
  fontWeight: 'inherit !important',
  lineHeight: 'inherit !important',
  margin: '0px !important',
  outline: 'none !important',
  overflow: 'visible !important',
  padding: '5px 5px 5px 12px !important',
  textAlign: 'inherit !important',
  textDecoration: 'none !important',
  height: '42px !important',
  color: [theme.palette.secondary.error, '!important'],
  justifyContent: 'center',
  boxSizing: "border-box",
  verticalAlign: 'middle !important',

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
          <CustomToggleButton
            backgroundColor={"#000 !important"}
            size="large"
            aria-label="search"


          >
            <MenuIcon
              fontSize='medium'
            />
            <AccountCircleIcon
              fontSize='large'
            />

          </CustomToggleButton>
        </Box>
      </StyledToolbar>
    </AppBar >
  );
}


// 