import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'
import LeftSide from '../LeftSide'
import CenteredTabs from '../CenteredTabs'
import RightSide from '../RightSide'
import PropTypes from 'prop-types'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import useStyles from './styles'
import useTheme from '@mui/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import SearchMiddle from '../SearchMiddle'
import PillForm from '../PillForm'
import ElevateAppBar from '../ElevateAppBar'
import { styled, alpha } from '@mui/material/styles'
import Foto from '../Foto'

// export const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   // Override media queries injected by theme.mixins.toolbar
//   position: 'sticky',
//   zIndex: '150',
//   [theme.breakpoints.down('sm')]: {
//     minHeight: '164px',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexdirection: 'column',
//     zIndex: '1',


//   },
//   backgroundColor: [theme.palette.common.black,],
//   color: [theme.palette.common.white,],
// }));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
// const CustomHideAppBar = styled(AppBar)(({ theme }) => ({
//   margin: "0 80px 0 80px",
//   display: "flex",
//   alignItems: "center",
//   alignSelf: "center",
//   justifyContent: "space-between",

// }));

function HideAppBar(props) {
  const theme = useTheme()
  const mediumView = useMediaQuery(theme.breakpoints.down("md"))
  const largeView = useMediaQuery(theme.breakpoints.up('lg'))
  const classes = useStyles(theme)
  return (
    <React.Fragment>
      <HideOnScroll {...props} >
        {!mediumView ? <AppBar
          color="inherit"

          sx={{
            marginTop: "-10px",
            zIndex: 150, position: 'sticky',
            backgroundColor: 'black', color: 'white',
            display: 'flex',
            justifyContent: 'space-between',

            borderBottom:
              (theme) => `1px solid ${theme.palette.divider}`,

            margin: (theme) => `0 ${theme.spacing(8)}px`
          }}
          className={classes.nav}>
          <Toolbar
            sx={
              {
                backgroundColor: 'black',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            className={classes.toolbar}>
            <Box
              marginRight={5}
              marginLeft={5}
              noWrap
            >
              <LeftSide />
            </Box>
            {largeView ?
              <Box
                sx={{ flexGrow: 1 }}
                className={classes.center}
              >
                <CenteredTabs />
              </Box> :
              <Box marginRight={5}>
                <RightSide />
              </Box>

            }
            {largeView ?
              <Box marginRight={5}>
                <RightSide />
              </Box>

              :
              <Box
                sx={{ flexGrow: 1 }}
                className={classes.center}
              >
                <CenteredTabs />
              </Box>}

          </Toolbar>
          <PillForm />
        </AppBar> : <SearchMiddle />}
      </HideOnScroll>
      <Container>
        <Box sx={{ m: 24 }}>

        </Box>

      </Container>

      <Foto />


    </React.Fragment>
  );
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tannerbleakley.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Ashville',

    description: [

      '248 miles away',

    ],

  },
  {
    title: 'Charleston',
    subheader: 'Most popular',
    price: '15',
    description: [

      '2 miles away',

    ],

  },
  {
    title: 'Bryson City',
    price: '30',
    description: [

      '24 miles away',

    ],

  },
  {
    title: 'Gatlinburg',
    price: '30',
    description: [

      '48 miles away',

    ],

  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function AppContent() {
  const theme = useTheme()
  const mediumView = useMediaQuery(theme.breakpoints.up("md"))
  const largeView = useMediaQuery(theme.breakpoints.up('lg'))
  const classes = useStyles(theme)
  return (
    <React.Fragment>
      <GlobalStyles styles={{
        ul: { margin: 0, padding: 0, listStyle: 'none' },
        body: {
          // paddingLeft: "80px",
          // paddingRight: "80px",

          //could use theme here
          backgroundColor: 'black',
          color: 'white',
        }
      }} />
      {mediumView ? <> <ElevateAppBar />
        <HideAppBar /></> : <><SearchMiddle /></>}
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'left' }}

                  subheaderTypographyProps={{
                    align: 'left',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        // component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment >
  );
}

export default function App() {
  return <AppContent />;
}