import * as React from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import Button from '@mui/material/Button'
import { ReactComponent as SearchSvg } from "../../Assets/Svgs/search.svg"
export default function SearchMiddle() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Box
      sx={{ flex: 1 }}
      className={classes.root}>
      <Box
        className={classes.searchfeild}
      >
        <Button
          className={classes.searchButton}
        >
          <SearchSvg className={classes.searchicon} />
        </Button>
      </Box>
    </Box>
  );
}


