import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({

  root: {
    display: 'flex',
    color: "theme.palette.common.white !important",
    [theme.breakpoints.down('md')]: {
      display: 'none',

    },

  },

}))

export default styles