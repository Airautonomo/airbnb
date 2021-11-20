import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  hideappbar: {
    display: 'flex',
    backgroundColor: "black !important",
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,

  },
  tab__wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid yellow',
  },
  logo__wrapper: {
    display: 'flex',
    alignItems: 'start',
    border: '1px solid red',
  },
  right: {
    display: 'flex',
    color: "theme.palette.common.white !important",
  },
}))

export default styles