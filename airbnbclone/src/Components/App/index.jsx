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
import Foto from '../Foto'
import { Paper } from '@mui/material'
//



import CameraIcon from '@mui/icons-material/PhotoCamera';



import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';

import Stack from '@mui/material/Stack';








import { styled, alpha } from '@mui/material/styles'
import { border } from '@mui/system'

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
const CustomHideAppBar = styled(AppBar)(({ theme }) => ({
  margin: "0 80px 0 80px",
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "space-between",
}));



function HideAppBar(props) {
  const theme = useTheme()
  const mediumView = useMediaQuery(theme.breakpoints.down("md"))
  const largeView = useMediaQuery(theme.breakpoints.up('lg'))
  const classes = useStyles(theme)
  return (
    <React.Fragment>
      <HideOnScroll {...props} >
        {!mediumView ? <AppBar

          sx={{
            marginTop: "-10px",
            zIndex: 150, position: 'sticky',
            // backgroundColor: 'black', color: 'white',
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
        {/* <Box sx={{ my: 24 }}>
        </Box> */}
      </Container>
      {/* <Box sx={{ my: 30 }}>

      </Box > */}

    </React.Fragment>
  );
}

function Copyright(props) {
  return (
    <Container backgroundColor="#DDDDDD">
      <Typography variant="body2" color="#717171" align="left" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://tannerbleakley.com/">
          2021 Not  Airbnb, Inc.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
}

const tiers = [
  {
    title: 'Ashville',
    image: '	https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=720',
    color: "rgb(204, 45, 74)",

    description: [

      '248 miles away',

    ],

  },
  {
    title: 'Charleston',
    image: '	https://a0.muscache.com/im/pictures/987777cc-4ef6-4db7-93fe-b40770abd75d.jpg?im_w=720',
    subheader: 'Most popular',
    color: '#D93B30',
    description: [

      '2 miles away',

    ],

  },
  {
    title: 'Bryson City',
    image: 'https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=720',
    color: '#BC1A6E',
    description: [

      '24 miles away',

    ],

  },
  {
    title: 'Gatlinburg',
    image: 'https://a0.muscache.com/im/pictures/6adb1a38-b912-4dd6-83d7-103bb9a80d43.jpg?im_w=720',
    color: '#DE3151',
    description: [

      '48 miles away',

    ],

  },
];

const footers = [
  {
    title: 'Support',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },

  {
    title: 'Community',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Hosting',
    description: ['Privacy policy', 'Terms of use'],
  },
  {
    title: 'About',
    description: ['Newsroom', "Learn about new features",
      "Letter from our founders",
      "Careers",
      "Investors",
      "Airbnb Luxe",
    ],
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
      <Container maxWidth="sm" component="main" sx={{ pt: 6, pb: 6, }}>
        <Foto />
      </Container>
      <Container maxWidth="md" component="main" sx={{ pt: 1, pb: 1, }}>
        <Typography variant="body1" align="left" color="white" component="p">
          Explore the 50+ upgrades we’re launching as part of our 2021 Winter Release.       <Button color="secondary" variant='contained'>Learn More</Button>
        </Typography>

      </Container>

      <Container maxWidth="sm" component="main" sx={{ pt: 0, pb: 6, }}>

      </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (

            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              {/* <Card>

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
              </Card> */}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ pt: 8, pb: 20, backgroundColor: "#fff" }} maxWidth="false">
        {/* End hero unit */}
        <Grid container spacing={2}>
          {tiers.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: '270px', width: "200px", display: 'flex', flexDirection: 'column', borderRadius: '20px' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    // pt: '56.25%',
                  }}
                  image={card.image}
                  alt="city"
                />
                <CardContent sx={{ flexGrow: 1, backgroundColor: card.color, pb: 9 }}>
                  <Typography color="white" variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography color='white'>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ pt: 8, pb: 20, backgroundColor: "#fff" }} maxWidth="false">
        {/* End hero unit */}
        <Paper elevation={3}>
          <Grid container spacing={0} alignContent={"center"}>

            <Grid item xs={12} sm={12} md={12}>
              <Card
                sx={{ height: '100%', width: "100%", display: 'flex', flexDirection: 'column', borderRadius: '20px' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    // pt: '56.25%',
                  }}
                  image={"https://a0.muscache.com/im/pictures/3d147230-aeba-4a73-aee5-adcf388eba76.jpg?im_q=highq&amp;im_w=720"}
                  alt="city"
                />
                {/* <CardContent sx={{ flexGrow: 1, pb: 9 }}>
                  <div class="_i5m7e6w">
                    <div class="_16mr3emj" >
                      <div class="_1ot88a2">
                        <div class="_ussrz76"
                          style={{ height: "100%", width: "100%" }}
                          role="img" aria-busy="true" aria-label="Image is loading">
                          <picture>
                            <source
                              srcset="
                                                                                                                            https://a0.muscache.com/im/pictures/24535835-bd90-4c69-bfdb-cc968e5af4df.jpg?im_q=highq&amp;im_w=1920 1x,
                                                                                                                            https://a0.muscache.com/im/pictures/24535835-bd90-4c69-bfdb-cc968e5af4df.jpg?im_q=highq&amp;im_w=2560 2x
                                                                                                                        "
                              media="(min-width: 2080px)" />
                            <source
                              srcset="
                                                                                                                            https://a0.muscache.com/im/pictures/24535835-bd90-4c69-bfdb-cc968e5af4df.jpg?im_w=1200 1x,
                                                                                                                            https://a0.muscache.com/im/pictures/24535835-bd90-4c69-bfdb-cc968e5af4df.jpg?im_w=2560 2x
                                                                                                                        "
                              media="(min-width: 1440px)" />
                            <source
                              srcset="
                                                                                                                            https://a0.muscache.com/im/pictures/101e7c24-199a-4f69-9a00-d9b253657a44.jpg?im_w=960  1x,
                                                                                                                            https://a0.muscache.com/im/pictures/101e7c24-199a-4f69-9a00-d9b253657a44.jpg?im_w=1920 2x
                                                                                                                        "
                              media="(min-width: 1128px)" />
                            <source
                              srcset="
                                                                                                                            https://a0.muscache.com/im/pictures/d3f25640-6035-4e50-adaa-cb1f26ee0685.jpg?im_w=720  1x,
                                                                                                                            https://a0.muscache.com/im/pictures/d3f25640-6035-4e50-adaa-cb1f26ee0685.jpg?im_w=1440 2x
                                                                                                                        "
                              media="(min-width: 744px)" />
                            <source
                              srcset="
                                                                                                                            https://a0.muscache.com/im/pictures/f2541836-75b4-4fb8-a99d-b77690be53b8.jpg?im_w=320 1x,
                                                                                                                            https://a0.muscache.com/im/pictures/f2541836-75b4-4fb8-a99d-b77690be53b8.jpg?im_w=720 2x
                                                                                                                        "
                              media="(min-width: 375px)" />
                            <source
                              srcset="
                                                                                                                            https://a0.muscache.com/im/pictures/3d147230-aeba-4a73-aee5-adcf388eba76.jpg?im_w=320 1x,
                                                                                                                            https://a0.muscache.com/im/pictures/3d147230-aeba-4a73-aee5-adcf388eba76.jpg?im_w=720 2x
                                                                                                                        " />
                            <img

                              // style={{ "position: absolute; left: 0; right: 0; object-fit: cover; object-position: center; vertical-align: bottom;"}}
                              aria-hidden="true"
                              alt="A guest stands, waving, in the doorway of a unique-looking dome house at dusk, bathed in warm, welcoming light."
                              src="https://a0.muscache.com/im/pictures/3d147230-aeba-4a73-aee5-adcf388eba76.jpg?im_q=highq&amp;im_w=720" />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>

                </CardContent> */}
                <CardActions>

                </CardActions>
              </Card>

            </Grid>

          </Grid>
        </Paper>
      </Container>
      {/* Footer */}
      <Paper>
        <Container
          maxWidth="false"
          component="div"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly" backgroundColor="#EBEBEB" pt={9} mt={9}>
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="black" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="rgb(34, 34, 34)">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
            <Copyright sx={{ mt: 5, pb: 4 }} />
          </Grid>

        </Container>
      </Paper>
      {/* End footer */}
    </React.Fragment >
  );
}

export default function App() {
  return <AppContent />;
}