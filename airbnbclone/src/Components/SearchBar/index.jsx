import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LanguageIcon from '@mui/icons-material/LanguageSharp'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import CompanyLogo from '../CompanyLogo'

import Button from '@mui/material/Button'
import {
  StyledIconButton,
  CustomToggleButton,
  StyledToolBar
} from '../CustomStyledComponents'

import { ReactComponent as SearchSvg } from "../../Assets/Svgs/search.svg"


export default function SearchBar() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <AppBar
      className={classes.searchbar}>
      <StyledToolBar
      >
        <Box className={classes.left} >
          <CompanyLogo />
        </Box >
        <Box
          sx={{ flex: 1 }}
          className={classes.center}>
          <Box
            className={classes.searchfeild}

          >
            <Button

              className={classes.searchButton}
            >
              <SearchSvg className={classes.searchicon} />
            </Button>
          </Box>
        </Box>
        <Box
          className={classes.right}
        >
          <StyledIconButton
            size='small'
            color="inherit"
            type="text">
            Become a Host
          </StyledIconButton>
          <IconButton
            size="small"
            aria-label="language"
            label="search"
            color="inherit">
            <LanguageIcon
              fontSize='small'
            />
          </IconButton>
          <CustomToggleButton
            size="large"
            aria-label="account"
          >
            <MenuIcon
              fontSize='medium'
            />
            <AccountCircleIcon
              fontSize='large'
            />

          </CustomToggleButton>
        </Box>
      </StyledToolBar>
    </AppBar >
  );
}


// 