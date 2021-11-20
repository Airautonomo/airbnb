import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import useStyles from './styles'
import SearchBar from '../SearchBar'
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // Override media queries injected by theme.mixins.toolbar
  [theme.breakpoints.down('sm')]: {
    minHeight: '164px',
    alignItems: 'center',
    justifyContent: 'center',
    flexdirection: 'column',

  },
  backgroundColor: [theme.palette.common.white,],
  color: [theme.palette.common.black,],
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
    <ElevationScroll {...props}>
      <StyledAppBar className={classes.search}>
        <SearchBar />
      </StyledAppBar>
    </ElevationScroll>
  );
}