import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import useStyles from './styles'
import { useTheme } from '@emotion/react'
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material'
const CenteredTabs = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: '5px',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 4,
      width: '50%',
      backgroundColor: 'inherent',
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(.5),
      outline: "none !important",
      zIndex: "0 !important",
      padding: "10px 12px !important",
      touchAction: "manipulation !important",
      fontFamily: "inherit !important",
      fontSize: "inherit !important",
      lineHeight: "inherit !important",
      fontWeight: "inherit!important",
      borderRadius: "8px!important",
      borderWidth: "1px!important",
      borderColor: "black !important",
      borderStyle: "solid !important",
      color: "inherit !important",

      '&:hover': {
        color: '#818b9c',
        opacity: 1,

      },
      '&.Mui-selected': {
        color: 'grey',
        fontWeight: theme.typography.fontWeightMedium,

      },
      '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
      },
    }),
  );

  return (
    <Box>
      <StyledTabs value={value} onChange={handleChange} centered>
        <StyledTab
          classname={classes.tab}
          label="Places to stay"
        />
        <StyledTab
          classname={classes.tab}
          label="Experiences"
        />
        <StyledTab
          classname={classes.tab}
          label="Online Experiences"
        />
      </StyledTabs>
    </Box>
  );
}

export default CenteredTabs









