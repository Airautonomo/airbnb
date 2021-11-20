import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  search: {
    display: 'flex',
    backgroundColor: 'inherit !important',
    justifyContent: 'space-between',
    color: 'inherit !important',
    zIndex: 1,
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

}))

export default styles