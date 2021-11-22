import * as React from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import Button from '@mui/material/Button'
import { ReactComponent as SearchSvg } from "../../Assets/Svgs/search.svg"
import { Toolbar } from '@mui/material'

export default function SearchMiddle() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const handleClick = () => {
    alert('You clicked me')
  }

  return (
    <Toolbar
      sx={{ flex: 1 }}
      className={classes.searchroot}>
      <Box
        onClick={handleClick}
        className={classes.searchfeild}
      >
        <Button
          className={classes.searchButton}
        ><SearchSvg className={classes.searchicon} />
        </Button>


      </Box>
    </Toolbar >




  );
}


