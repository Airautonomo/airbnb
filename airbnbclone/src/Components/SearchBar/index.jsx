import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import CompanyLogo from '../CompanyLogo'
import { Toolbar } from '@mui/material'
import Button from '@mui/material/Button'


import { ReactComponent as SearchSvg } from "../../Assets/Svgs/search.svg"
import RightSide from '../RightSide'
import LeftSide from '../LeftSide'
import SearchMiddle from '../SearchMiddle'


export default function SearchBar() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <div
      className={classes.findstuff}>
      <Toolbar
      >    <Box
        marginRight={5}
        marginLeft={5}
        noWrap
      > <LeftSide /></Box>

        <SearchMiddle />
        <Box marginRight={5}
          marginLeft={22}>

          <RightSide />
        </Box>
      </Toolbar>
    </div >
  );
}


// 