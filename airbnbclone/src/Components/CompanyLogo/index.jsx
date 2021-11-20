import React from 'react'
import { ReactComponent as IconSvg } from "../../Assets/Svgs/icon.svg"
import { Box } from '@mui/material'
import useStyles from './styles'

import { useTheme } from '@mui/styles';
const CompanyLogo = ({ color }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (

    <Box
      class=""

      color={"inherit"}
      aria-label="Airbnb Icon"
      sx={{ ml: 1 }}
    >
      <IconSvg
        className={classes.icon}
      />
    </Box>

  )
}

export default CompanyLogo
