import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import CompanyLogo from '../CompanyLogo'

import Button from '@mui/material/Button'
import {

  StyledToolBar
} from '../CustomStyledComponents'

import { ReactComponent as SearchSvg } from "../../Assets/Svgs/search.svg"
import RightSide from '../RightSide'
import LeftSide from '../LeftSide'
import SearchMiddle from '../SearchMiddle'


export default function SearchBar() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <AppBar
      className={classes.findstuff}>
      <StyledToolBar
      >
        <LeftSide />
        <SearchMiddle />
        <RightSide />
      </StyledToolBar>
    </AppBar >
  );
}


// 