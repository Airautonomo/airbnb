import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'

const styles = makeStyles(theme => ({


  searchbar: {
    backgroundColor: '#fff !important',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '-100x',
    padding: '10px',
    zIndex: 50,
  },






  searchicon: {


    width: '1.5em',
    height: '1.5em',
    fill: '#fff',
    marginRight: '0.5em',
    marginLeft: '0.5em',
    '&:hover': {
      fill: '#fff',
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
    width: '300px !important',
    maxWidth: '35% !important',
    height: '50px',
    border: '1px solid lightgray',
    borderRadius: '999px',
    margin: '0px 10px',
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px',
    },
  },
  searchButton: {
    flex: '0 0 auto !important',
    width: "300px !important",
    fontWeight: '600 !important',
    padding: '10px 16px !important',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    maxWidth: 'fit-content',
    border: '1px solid lightgray',
    borderRadius: '800px',
    margin: '0px 10px',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px',
    },
  },
  center: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid yellow',
    minWidth: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',


    },
  },
  left: {
    marginLeft: '5%',
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      display: 'none'

    },
  },
  right: {
    display: 'flex',
    color: "theme.palette.common.white !important",
    marginRight: '5%',
    [theme.breakpoints.down('sm')]: {
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