import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({

  rightroot: {
    transition: 'all 0.3s ease-in-out',

    display: 'flex',
    color: "theme.palette.common.white !important",
    [theme.breakpoints.down('md')]: {
      display: 'none',

    },

  },

}))

export default styles