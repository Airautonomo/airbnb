import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Slide from '@mui/material/Slide'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material/FormControl';
import useStyles from './styles'
import DeskTopAppBar from '../DeskTopAppBar'
import Foto from '../Foto'

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          className={classes.hideappbar}>
          <DeskTopAppBar />
        </AppBar>
      </HideOnScroll>

      {/* <Container>
        <Box sx={{ my: 24 }}>
          <Foto />

        </Box>
      </Container> */}
      <Box sx={{ my: 30 }}>
        <Foto />
      </Box >

    </React.Fragment>
  );
}
