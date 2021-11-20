import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    backgroundColor: 'inherit !important',
    justifyContent: 'space-between',
    paddingBottom: '100px',
    marginTop: '-100x',
    zIndex: 100,
  },
  center: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    minWidth: 'fit-content',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',


    },
  },
  left: {
    marginLeft: '5%',
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  right: {
    display: 'flex',
    color: "theme.palette.common.white !important",
    marginRight: '5%',
    [theme.breakpoints.down('md')]: {
      display: 'none',

    },
  },
  search: {
    marginLeft: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.grey,
    },
  },



}))

export default styles