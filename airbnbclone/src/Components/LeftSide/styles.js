import makeStyles from '@mui/styles/makeStyles'
const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {

    }
  },
}))

export default styles 