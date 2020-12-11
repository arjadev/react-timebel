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
import Timer from './Timer';

const useStyles = makeStyles(() => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    online: props =>({
        backgroundColor: props.color,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginRight: 5,
        marginTop: -6
    }),
}));

function EventInformation(props) {

    const classes = useStyles();
    // const [status, setStatus] = useState('UPCOMING');
    const { status, onChangeStatus } = props;

    return (

        <Card>

            <CardHeader title="Event Information" />

            <Divider />

            <CardContent>

                <InfoItem name={'Event ID'} value={'95AS2XE12T'}/>

                <InfoItem name={'Event Title'} value={'Harry Potter AD'}/>

                <InfoItem name={'Start'} value={UtilService.getLocalDateTime('2020-12-01')}/>

                <InfoItem name={'End'} value={UtilService.getLocalDateTime('2020-12-27')}/>

                <Grid container spacing={1}>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="textPrimary">
                            Status
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={8} className={classes.row}>
                        <div className={classes.online} style={{backgroundColor: UtilService.getStatusColor(status)}}></div>
                        <Typography
                            gutterBottom
                            color="textSecondary"
                            variant="caption"
                        >
                            {status}
                        </Typography>
                    </Grid>

                </Grid>

                <InfoItem name={'Participants'} value={'Complete:11 - Pending:16'}/>

                <Grid container spacing={1}>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="textPrimary">
                            Length
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={8} className={classes.row}>
                        <Timer initialMinute={0} initialSeconds={12} initialHour={0} initialDay={1}/>
                    </Grid>

                </Grid>

                <Box mt={1}>
                    <ButtonGroup disableElevation size="small" variant="contained" color="default">
                        <Button color="primary" onClick={()=>onChangeStatus('LIVE')}>Play</Button>
                        <Button onClick={()=>onChangeStatus('PAUSED')}>Pause</Button>
                        <Button onClick={()=>onChangeStatus('STOPPED')}>Stop</Button>
                        <Button onClick={()=>onChangeStatus('COMPLETED')}>Reset</Button>
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
          <Grid container spacing={1}>
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