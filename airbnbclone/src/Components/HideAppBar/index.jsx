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

      <Container>
        <Box sx={{ my: 24 }}>
          {[...new Array(102)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <Box sx={{ my: 2 }}>
        hi
      </Box >
    </React.Fragment>
  );
}
