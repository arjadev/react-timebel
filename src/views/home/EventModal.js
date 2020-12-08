import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import {
  Grid,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  makeStyles,
  Switch
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  helperText: {
    textAlign: 'right',
    marginRight: 0
  }
}));

function EventModal({
  open,
  onClose,
  onApply,
  className,
  ...rest
}) {
  const [value, setValue] = useState('');
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.value);
  };

  const handleApply = () => {
    enqueueSnackbar('Request sent', {
      variant: 'success'
    });
    onApply();
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth = {'sm'}
      onClose={onClose}
      open={open}
    >
      <div
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Typography
          align="center"
          className={classes.title}
          gutterBottom
          variant="h3"
          color="textPrimary"
        >
          Create an Event
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          Please fill in the blanks to create new event.
        </Typography>

        <Box mt={2}>
            <TextField
                fullWidth
                autoFocus
                label="Event Name"
                name="productCode"
                variant="outlined"
            />
        </Box>

        <Box mt={3}>
          <TextField
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            fullWidth
            helperText={`${200 - value.length} characters left`}
            label="Short Note"
            multiline
            onChange={handleChange}
            placeholder="What excites you about this event?"
            rows={5}
            value={value}
            variant="outlined"
          />
        </Box>

        <Box mt={3}>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <TextField
                        id="datetime-local"
                        label="Start Date/Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id="datetime-local"
                        label="Start Date/Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>

        <Box mt={3}>

            <Typography
                variant="body2"
                color="textSecondary"
            >
                This will give the event ASYNC or MODERATED 
            </Typography>

            <Switch
                // checked={values.discountedPrices}
                color="secondary"
                edge="start"
                name="discountedPrices"
                // onChange={handleChange}
                // value={values.discountedPrices}
            />

        </Box>

        <Box
          mt={3}
        >
          <Button
            onClick={handleApply}
            variant="contained"
            fullWidth
            color="primary"
          >
            Launch
          </Button>
        </Box>
      </div>
    </Dialog>
  );
}

EventModal.propTypes = {
  className: PropTypes.string,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};

EventModal.defaultProps = {
  onApply: () => {},
  onClose: () => {}
};

export default EventModal;
