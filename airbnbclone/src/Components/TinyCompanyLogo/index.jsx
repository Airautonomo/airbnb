import React from 'react'
import { ReactComponent as TinyIconSvg } from "../../Assets/Svgs/tinyicon.svg"
import IconButton from '@mui/material/IconButton'
import useStyles from './styles'

import { useTheme } from '@mui/styles';
const TinyCompanyLogo = ({ color }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (

    <IconButton
      class=""

      color={"inherit"}
      aria-label="Airbnb Icon"
      sx={{ ml: 1 }}
    >
      <TinyIconSvg
        className={classes.icon}
      />
    </IconButton>

  )
}

export default TinyCompanyLogo
