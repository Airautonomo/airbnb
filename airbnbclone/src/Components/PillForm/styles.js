import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  root: {
    margin: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '840px',
    minWidth: '60%',



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

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: "100 % !important",
    color: "transparent!important",
    borderRight: "1px solid #dddddd",
    marginLeft: '10px',
  },
  formGroupLast: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',

    height: "100 % !important",
    color: "transparent!important",

    marginLeft: '16px',
  },
  buttonwrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  input: {
    border: '.05px solid #fff',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: "100 % !important",
    color: "transparent!important",
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
    margin: "0px 0 0 30px !important",
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



