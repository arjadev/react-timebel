import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Divider,
    Typography,
    makeStyles,
    Button,
    ButtonGroup,
    Box
} from '@material-ui/core';
import UtilService from 'src/utils/service';

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

function EventInformation({ className, ...rest }) {

    const classes = useStyles();

    return (

        <Card>
            <CardHeader title="Event Information" />
            <Divider />
            <CardContent>
                <InfoItem name={'Event ID'} value={'95AS2XE12T'}/>
                <InfoItem name={'Event Title'} value={'Harry Potter AD'}/>
                <InfoItem name={'Start'} value={UtilService.getLocalDateTime('2020-12-01')}/>
                <InfoItem name={'End'} value={UtilService.getLocalDateTime('2020-12-27')}/>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                        >
                            Status
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={8} className={classes.row}>
                        <div className={classes.online}></div>
                        <Typography
                            gutterBottom
                            color="textSecondary"
                            variant="caption"
                        >
                            IN PROGRESS
                        </Typography>

                    </Grid>
                </Grid>
                <InfoItem name={'Participant'} value={'Complete:11 - Pending:16'}/>
                <InfoItem name={'Length'} value={'3m 17s'}/>
                <Box mt={1}>
                    <ButtonGroup disableElevation size="small" variant="contained" color="default">
                        <Button color="primary">Play</Button>
                        <Button>Pause</Button>
                        <Button>Stop</Button>
                    </ButtonGroup>
                </Box>
            </CardContent>
        </Card>

    );
}

EventInformation.propTypes = {
    className: PropTypes.string
};

export default EventInformation;


function InfoItem(props){
   return (
          <Grid
            container
            spacing={1}
          >
            <Grid item xs={12} md={4}>
                <Typography
                    variant="h6"
                    color="textPrimary"
                >
                    {props.name}
                </Typography>

            </Grid>
            <Grid item xs={12} md={8}>
                <Typography
                    gutterBottom
                    color="textSecondary"
                    variant="caption"
                >
                    {props.value}
                </Typography>
            </Grid>
        </Grid>
        )
}