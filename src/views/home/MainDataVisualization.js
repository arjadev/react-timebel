import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  online: {
    backgroundColor: '#2ac940',
    height: 12,
    width: 12,
    borderRadius: 6,
    marginRight: 5,
    marginTop: -6
  },
}));

function MainDataVisualization({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Main Data Visualization" />
      <Divider />
      <CardContent>

        <Box mt={2}>

        </Box>
        <Box mt={2}>

        </Box>
      </CardContent>
    </Card>
  );
}

MainDataVisualization.propTypes = {
  className: PropTypes.string
};

export default MainDataVisualization;
