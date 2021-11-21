import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({

  // tool__bar: {
  //   display: 'flex',
  //   justifyContent: 'space-between',

  //   alignItems: 'space-between',
  //   paddingTop: theme.spacing(1),
  //   paddingBottom: theme.spacing(2),
  // },

  tab__wrapper: {
    // marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(4),
    minWidth: 300,
    display: 'inline-flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {


      fontSize: '14px !important',
      lineHeight: '18px !important',
      fontWeight: '600 !important',





    },
  },
  tab: {
    padding: '10px 12px',
    width: "114.06px",
    height: "38px",
    minWidth: 100,
    fontSize: "100px",
    letterSpacing: "1px",
    color: "red",
    // display: "inline-block  !important",
    textTransform: 'none',
    '&:hover': {
      cursor: 'pointer',
      color: '#818b9c',
    },
  }




}))

export default styles