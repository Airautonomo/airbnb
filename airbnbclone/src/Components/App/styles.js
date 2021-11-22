import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  hideappbar: {
    // paddingLeft: "80px !important",
    // paddingRight: "80px !important",
    backgroundColor: "black !important",
    // border: "11px solid #000 !important",
    justifyContent: 'space-between',
    // alignItems: 'center',
    // position: 'fixed',
    // top: 0,
    zIndex: 100,
  },


  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'inherit !important',
    justifyContent: 'space-between',
    // paddingBottom: '100px',
    marginTop: '10px',

    // height: "140% !important",
    zIndex: 100,
  },

  toolbar: {
    marginTop: '25px',
    marginBottom: '15px',
  },

  center: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '16px',
    // fontWeight: 'bold',
    fontSmooth: 'always',
    minWidth: 'fit-content',
    // [theme.breakpoints.down('md')]: {
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',


    // },
    // [theme.breakpoints.down('lg')]: {
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   width: '949px',


    // },
  },
}))
export default styles