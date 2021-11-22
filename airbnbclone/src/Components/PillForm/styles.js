import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  root: {
    margin: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '750px',
    minWidth: '60%',

    border: "solid green 1px"
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
    height: "66px !important",



  },
  label: {


    // font-size: 12px !important;
    // line-height: 16px !important;
    // font-weight: 800 !important;
    // letter-spacing: 0.04em !important;
    // padding-bottom: 2px !important;

    fontSize: '14px !important',
    lineHeight: '16px !important',
    fontWeight: '800 !important',
    letterSpacing: '0.04em !important',
    paddingBottom: '2px !important',




    fontSmooth: 'always',
    color: '#000',
    backgroundColor: '#fff',
    border: "1px solid green",

  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: "100 % !important",
    color: "transparent!important",
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: "100 % !important",
    color: "transparent!important",
  },
  buttonwrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // border: '1px solid red',

  },

  button: {

    backgroundColor: "transparent !important",
    border: "0px !important",
    color: "#FFFFFF !important",
    cursor: "pointer !important",
    fontFamily: "inherit !important",
    fontSize: "16px !important",
    fontWeight: "600 !important",
    lineHeight: "16px !important",
    margin: "0px 0 0 80px !important",


    padding: "0px !important",
    textAlign: "inherit !important",
    textDecoration: "none !important",
    webkitUserSelect: "auto !important",
    mozUserSelect: "auto !important",
    msUserSelect: "auto !important",
    userSelect: "auto !important",
    backgroundColor: "#FF385C !important",
    borderRadius: "24px !important",
    height: "48px !important",
    // maxWidth: "48px !important",
    // position: "relative !important",
    width: "48px !important",
    webkitTransition: "0.2s max-width",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",


  },

}))

export default styles



