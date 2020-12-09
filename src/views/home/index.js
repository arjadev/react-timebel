import React, { useState } from 'react';
import { Container, makeStyles, Button, Box, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import Application from './EventModal';
import EventInformation from './EventInformation';
import Participant from './Participant';
import MainDataVisualization from './MainDataVisualization';
import EventSummary from './EventSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Home() {
  const classes = useStyles();

  const [openApplication, setOpenApplication] = useState(false);

  const handleApplicationOpen = () => {
    setOpenApplication(true);
  };

  const handleApplicationClose = () => {
    setOpenApplication(false);
  };

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Container maxWidth="lg">
        <Grid
          container
          justify={'flex-end'}
        >
          <Button
            color='primary'
            variant="contained"
            onClick={handleApplicationOpen}
          >
            + Add Event
          </Button>
        </Grid>
        

        <Box mt={2}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              lg={4}
            >
              <EventInformation />
              <Participant />
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
            >
              <MainDataVisualization />
              <EventSummary />
            </Grid>
          </Grid>
        </Box>
        
        <Application
          onApply={handleApplicationClose}
          onClose={handleApplicationClose}
          open={openApplication}
        />
      </Container>
    </Page>
  );
}

export default Home;
