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
    height: '25px',
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
    height: '22px',
    width: '32px',
    borderRadius: '40px !important',
    margin: '0px 10px',

  },

  searchicon: {
    backgroundColor: '#ff385c !important',
    borderRadius: '50% !important',
    color: '#ffffff !important',
    margin: '7px 7px 7px 0 !important',
    padding: '10px !important',
    marginLeft: '48px !important',
  },
}))

export default styles