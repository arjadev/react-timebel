import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
} from '@material-ui/core';

function EventSummary({ className, ...rest }) {

    return (
        <Box mt={3}>
            <Card>
                <CardHeader title="Event Summary" />
                <Divider />
                <CardContent>
                    Comming soon!
                </CardContent>
            </Card>
        </Box>
    );
}

EventSummary.propTypes = {
    className: PropTypes.string
};

export default EventSummary;

