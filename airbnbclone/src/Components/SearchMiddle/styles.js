import makeStyles from '@mui/styles/makeStyles'


const styles = makeStyles(theme => ({

  searchroot: {
    color: '#222222 !important',
    margin: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '4px',
  },

  searchfeild: {
    cursor: 'pointer',
    border: '1px solid #e6e6e6',
    fontSize: '14px !important',
    lineHeight: '18px !important',
    flex: '1 1 auto !important',
    minWidth: '300px !important',
    fontWeight: '600 !important',
    padding: '10px 16px !important',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    width: '300px !important',
    maxWidth: '35% !important',
    height: "32px",
    borderRadius: '40px !important',
    margin: '0px 10px',
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px',
    },
  },
  searchButton: {
    fontSize: '8px !important',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    borderRadius: '40px !important',


  },



  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
    margin: '0px 2px',
    backgroundColor: '#fff',
    borderRadius: '35px',
    width: '100%',
    maxWidth: '830px',
    height: "66px !important",
  },

  label: {
    fontSize: '14px !important',
    lineHeight: '16px !important',
    fontWeight: '800 !important',
    letterSpacing: '0.04em !important',
    paddingBottom: '2px !important',
    fontSmooth: 'always',
    color: '#000',
    backgroundColor: '#fff',
    border: '.05px solid #fff',

  },

  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100 % !important",
    color: "transparent!important",
  },

  // formGroup: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  //   width: '100%',
  //   height: "100 % !important",
  //   color: "transparent!important",
  //   borderRight: "1px solid #dddddd",
  //   marginLeft: '10px',
  // },



  buttonwrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: "30px",
    width: '30px',
  },



  button: {

    border: "0px !important",
    color: "#FFFFFF !important",
    cursor: "pointer !important",
    fontFamily: "inherit !important",

    lineHeight: "16px !important",
    margin: "22px 0 0 20px !important",
    padding: "10px !important",
    textAlign: "inherit !important",
    textDecoration: "none !important",

    userSelect: "auto !important",
    backgroundColor: "#FF385C !important",
    borderRadius: "44px !important",


    position: "relative !important",

    webkitTransition: "0.2s max-width",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    width: "100%",
  },

}))

export default styles














