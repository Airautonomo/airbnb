import * as React from 'react'
import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountLogo from '../AccountLogo'
import LanguageIcon from '@mui/icons-material/LanguageSharp'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import { CustomToggleButton } from '../CustomStyledComponents'
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '.9rem',
  margin: '0 1rem 0 0',
}));
export default function RightSide() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (

    <Box
      className={classes.root}
    >
      <StyledIconButton
        size='small'
        color="inherit"
        type="text">
        Become a Host
      </StyledIconButton>
      <StyledIconButton
        size="small"
        aria-label="search"
        label="search"
        color="inherit">
        <LanguageIcon
          fontSize='small'
        />
      </StyledIconButton>
      <CustomToggleButton
        backgroundColor={"#000 !important"}
        aria-label="search"
      >
        <MenuIcon
          fontSize='small'
        />
        <AccountLogo

        />

      </CustomToggleButton>
    </Box>

  )
}


