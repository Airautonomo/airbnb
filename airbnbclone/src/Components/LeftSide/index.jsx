import * as React from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme';
import CompanyLogo from '../CompanyLogo'
import TinyCompanyLogo from '../TinyCompanyLogo'
import useMediaQuery from '@mui/material/useMediaQuery'
export default function LeftSide() {
  const theme = useTheme()
  const tabletView = useMediaQuery(theme.breakpoints.down("lg"))
  const classes = useStyles(theme)
  return (
    <Box className={classes.root} >
      {tabletView ? <TinyCompanyLogo /> : <CompanyLogo />}

    </Box >

  );
}


