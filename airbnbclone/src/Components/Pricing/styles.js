import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({

  toolbar: {
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'row',
      alignItems: 'space-around',
    }
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    backgroundColor: 'inherit !important',
    justifyContent: 'space-between',
    // paddingBottom: '100px',
    // marginTop: '-100x',

    height: "140% !important",
    zIndex: 100,
  },



  center: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
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