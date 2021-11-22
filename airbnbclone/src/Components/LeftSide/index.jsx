import * as React from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme';
import CompanyLogo from '../CompanyLogo'
import TinyCompanyLogo from '../TinyCompanyLogo'
import useMediaQuery from '@mui/material/useMediaQuery'
export default function LeftSide() {
  const theme = useTheme()
  const mediumView = useMediaQuery(theme.breakpoints.up("md"))
  const tabletView = useMediaQuery(theme.breakpoints.down("xl"))
  const classes = useStyles(theme)
  return (
    <Box>{mediumView ? <Box className={classes.leftroot} >
      {tabletView ? <TinyCompanyLogo /> : <CompanyLogo />}
    </Box > : null}</Box>
  );
}


