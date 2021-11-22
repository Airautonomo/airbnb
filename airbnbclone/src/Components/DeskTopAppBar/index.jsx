import * as React from 'react'
import styled from '@mui/material/styles/styled'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import CenteredTabs from '../CenteredTabs'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery'
import RightSide from '../RightSide'
import LeftSide from '../LeftSide'
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
export default function DeskTopAppBar() {
  const theme = useTheme()

  const classes = useStyles(theme)
  return (
    <AppBar
      className={classes.nav}>
      <StyledToolbar
      >
        <LeftSide />
        <Box
          sx={{ flex: 1 }}
          className={classes.center}>
          <CenteredTabs />
        </Box>
        <RightSide />
      </StyledToolbar>
    </AppBar >
  );
}


