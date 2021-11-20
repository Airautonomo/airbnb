import React from 'react'
import { ReactComponent as IconSvg } from "../../Assets/Svgs/icon.svg"
import IconButton from '@mui/material/IconButton'
import useStyles from './styles'

import { useTheme } from '@mui/styles';
const CompanyLogo = ({ color }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (

    <IconButton

      color={"inherit"}
      aria-label="Airbnb Icon"
      sx={{ ml: 1 }}
    >
      <IconSvg
        className={classes.icon}
      />
    </IconButton>

  )
}

export default CompanyLogo
