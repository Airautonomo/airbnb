import makeStyles from '@mui/styles/makeStyles'
const styles = makeStyles(theme => ({
  root: {
    marginLeft: '5%',
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}))

export default styles