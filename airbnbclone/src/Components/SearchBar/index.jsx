import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/LanguageSharp';
import useStyles from './styles'
import { useTheme } from '@mui/styles';
import CompanyLogo from '../CompanyLogo'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Input, ToggleButton } from '@mui/material'
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
          <Box className={classes.searchfeild}>
            <Button
              varient="out-lined"
              type="text"
              className={classes.searchButton}
            />
            <IconButton
              backgroundColor={"#FF385C !important"}
              color={
                theme.palette.secondary.error
              }>
              <SearchSvg className={classes.searchicon} />

            </IconButton>
          </Box>
        </Box>
        <Box
          className={classes.right}
        >
          <StyledIconButton
            size='large'
            color="inherit"
            type="text">
            Become a host
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