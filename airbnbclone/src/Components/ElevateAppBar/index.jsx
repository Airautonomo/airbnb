import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchBar from '../SearchBar';
import { styled, alpha } from '@mui/material/styles'
import useStyles from './styles'



const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // Override media queries injected by theme.mixins.toolbar
  zIndex: 5,
  position: 'sticky',
  backgroundColor: [theme.palette.common.white,],
  color: [theme.palette.common.black,],
}));










export default function ElevateAppBar(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 130,

  });
  return (
    <React.Fragment>
      {trigger ? <>

        <StyledAppBar className={classes.search}>
          <SearchBar />
        </StyledAppBar>

        <Container>
          {/* <Box sx={{ my: 2 }}>
    {[...new Array(12)]
      .map(
        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
      )
      .join('\n')}
  </Box> */}
        </Container></> : (<></>)}


    </React.Fragment>
  );
}