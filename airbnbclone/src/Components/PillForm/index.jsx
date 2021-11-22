

import { ReactComponent as BigSearchSvg } from '../../Assets/Svgs/bigsearch.svg'
import * as React from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme';
import CompanyLogo from '../CompanyLogo'
import TinyCompanyLogo from '../TinyCompanyLogo'
import useMediaQuery from '@mui/material/useMediaQuery'
function PillForm() {
  const theme = useTheme()
  const mediumView = useMediaQuery(theme.breakpoints.up("md"))
  const tabletView = useMediaQuery(theme.breakpoints.down("xl"))
  const classes = useStyles(theme)
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  onsubmit = (e) => {
    e.preventDefault();
    console.log(value)
    alert(value)
  }

  return (
    <Box>{mediumView ? <Box className={classes.root} >
      <div className={classes.wrapper}>
        <form onChange={handleChange}>
          <div className={classes.form}>
            <div className={classes.formGroup}>
              <label className={classes.label}
                htmlFor="name">Location</label>
              <input type="text" id="location" placeholder="Where are you going?" className={classes.input} />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="name" className={classes.label}>Check in</label>
              <input type="text" id="checkin" placeholder='Add dates' className={classes.input} />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="name" className={classes.label}>Check out</label>
              <input type="text" id="checkout" placeholder='Add dates' className={classes.input} />
            </div>
            <div className={classes.formGroupLast}>
              <label htmlFor="name" className={classes.label}>Guests</label>
              <input type="text" id="guests" placeholder='Add guests' className={classes.input} />
            </div>
            <div className={classes.buttongroup}>
              <div className={classes.buttonwrapper}>
                <button className={classes.button}><BigSearchSvg /></button>
              </div></div>
          </div>
          {/* <div className={classes.formGroup}>

          </div> */}

        </form >
        {/* <div className={classes.buttonwrapper}>

          <button className={classes.button}><BigSearchSvg /></button>
        </div > */}
      </div>
    </Box> : null}</Box>
  )
}

export default PillForm
