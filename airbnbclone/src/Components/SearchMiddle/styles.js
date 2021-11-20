import makeStyles from '@mui/styles/makeStyles'


const styles = makeStyles(theme => ({

  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  searchfeild: {
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
    height: '50px',
    borderRadius: '999px',
    margin: '0px 10px',
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px',
    },
  },

  searchButton: {
    border: '6px solid blue',
    boxSizing: 'border-box',
    fontSize: '14px !important',
    lineHeight: '18px !important',
    fontWeight: '600 !important',
    padding: '10px 16px !important',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
    maxWidth: '35% !important',
    height: "32px !important",
    borderRadius: '999px',
    width: "32px !important",
    fontFamily: "inherit !important",
    color: '#FFFFFF !important',
    margin: '0px -29px 0px 0px !important',
  },

  searchicon: {
    borderRadius: "50% !important",
    height: "32px !important",
    margin: "7px 7px 7px 0 !important",
    padding: "10px !important",
    width: "32px !important",
    fontFamily: "inherit !important",
    fontSize: "inherit !important",
    fontWeight: "inherit !important",
    lineHeight: "inherit !important",
    backgroundColor: '#FF385C',
    color: '#FFFFFF',
    fill: '#fff',

    '&:hover': {
      fill: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      margin: "0px 5px",
    },
  },
}))

export default styles