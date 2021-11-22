import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({

  rightroot: {
    margin: '0 80px 0 0px',
    display: 'flex',
    color: "theme.palette.common.white !important",
    [theme.breakpoints.down('md')]: {
      display: 'none',

    },

  },

}))

export default styles