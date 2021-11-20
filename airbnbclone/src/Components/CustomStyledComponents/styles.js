import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({

  searchfeild: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    maxWidth: 'fit-content',
    padding: '10px',
    height: '30px',
    border: '1px solid lightgray',
    borderRadius: '999px',
    margin: '0px 10px',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px',
    },
  },
  searchbar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '-100x',
    zIndex: 50,
  },
  center: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid yellow',
    minWidth: 'fit-content',

  },
  left: {
    marginLeft: '5%',
    border: '1px solid black',
  },
  right: {
    display: 'flex',
    color: "theme.palette.common.white !important",
    marginRight: '5%',
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