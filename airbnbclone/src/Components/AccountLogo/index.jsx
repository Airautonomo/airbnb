import React from 'react'
import { ReactComponent as AccountSvg } from "../../Assets/Svgs/account.svg"

import useStyles from './styles'
import { Box } from '@mui/system'
import { useTheme } from '@mui/styles';
const AccountLogo = ({ color }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (


    <AccountSvg
      className={classes.icon}
    />


  )
}

export default AccountLogo
