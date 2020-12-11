import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    makeStyles
} from '@material-ui/core';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: 20, 
    },
}));

function EventSummary({ className, ...rest }) {
    const classes = useStyles();

    return (
        <Box mt={3}>
            <Card>
                <CardHeader title="Event Summary" />
                <Divider />
                <CardContent className={classes.content}>
                    <Summary />
                </CardContent>
            </Card>
        </Box>
    );
}

EventSummary.propTypes = {
    className: PropTypes.string
};

export default EventSummary;

