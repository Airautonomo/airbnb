import { makeStyles } from '@mui/styles'

const styles = makeStyles(theme => ({

  // tool__bar: {
  //   display: 'flex',
  //   justifyContent: 'space-between',

  //   alignItems: 'space-between',
  //   paddingTop: theme.spacing(1),
  //   paddingBottom: theme.spacing(2),
  // },

  tab__wrapper: {
    // marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(4),
    minWidth: 300,
    display: 'inline-flex',
    justifyContent: 'space-between',

  },
  tab: {
    padding: '14px 24px',
    minWidth: 100,
    textTransform: 'none',
    '&:hover': {
      cursor: 'pointer',
      color: '#818b9c',
    },
  }




}))

export default styles