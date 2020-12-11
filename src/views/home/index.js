import React, { useState } from 'react';
import { Container, makeStyles, Button, Box, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import Application from './EventModal';
import EventInformation from './EventInformation';
import Participant from './Participant';
import EventSummary from './EventSummary';
import MainDataVisualization2 from './MainDataVisualization2';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  },
}));

function Home() {
  const classes = useStyles();

  const [openApplication, setOpenApplication] = useState(false);
  const [status, setStatus] = useState('UPCOMING');

  const handleApplicationOpen = () => {
    setOpenApplication(true);
  };

  const handleApplicationClose = () => {
    setOpenApplication(false);
  };

  return (
    <Page className={classes.root} title="Home">
      <Container maxWidth="lg">

        <Grid container justify={'flex-end'}>
          <Button color='primary' variant="contained">
            Export
          </Button>
          &nbsp;&nbsp;
          <Button color='primary' variant="contained" onClick={handleApplicationOpen}>
            + Add Event
          </Button>
        </Grid>
        
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <EventInformation status={status} onChangeStatus={(e)=>setStatus(e)}/>
              <Participant />
            </Grid>
            <Grid item xs={12} lg={8}>
              <MainDataVisualization2 status={status}/>
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
