import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

function Summary({ className, ...rest }) {
  const classes = useStyles();
  const overview = {
    income: '4.06',
    expanses: '1.72',
    profit: '3.88',
    subscriptions: '43 %'
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid alignItems="center" container justify="space-between">
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Wow Factor
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="primary">
              {overview.income}
            </Typography>
            <Label className={classes.label} color="success">
              +25%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Blah Factor
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="primary">
              {overview.expanses}
            </Typography>
            <Label
              className={classes.label}
              color="success"
            >
              +12%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Immersion
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="primary">
              {overview.profit}
            </Typography>
            <Label className={classes.label} color="error">
              -20%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            AWESOME INDEX
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="primary">
              {overview.subscriptions}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
