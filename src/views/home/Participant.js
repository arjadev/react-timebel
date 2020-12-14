import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography, Avatar, withStyles, Badge, makeStyles, Checkbox } from '@material-ui/core';
import { PARTICIPANTS } from 'src/utils/mock';
import { deepPurple } from '@material-ui/core/colors';
import UtilService from 'src/utils/service';
import GenericMoreButton from 'src/components/MainLayout/GenericMoreButton';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import { green, orange } from '@material-ui/core/colors';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import arrayMove from 'array-move';

function Paricipant(props) {
  const classes = useStyles();
  const [participants, setParticipants] = useState([]); 
  const [count, setCount] = useState(1); 
  const [checkedList, setCheckedList] = useState([]); 

  const SortableContainer = sortableContainer(({children}) => {
    return <ul>{children}</ul>;
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    setParticipants(arrayMove(participants, oldIndex, newIndex));
  }

  useEffect(()=>{
    let newParticipants = PARTICIPANTS.filter((item, index)=> index < count * 5 && index >= (count-1) * 5);
    setParticipants(participants=>participants.concat(newParticipants))
  }, [count])

  const handleCheckAll = () => {
    if(checkedList.length === participants.length){
      setCheckedList([]);
    } else{
      setCheckedList(participants.map(item => item.id));
    }
  };

  const handleCheck = (id) => {
    let newArray = [...checkedList];

    if (!checkedList.includes(id)) {
      newArray.push(id);
    } else {
      newArray.splice(
        newArray.findIndex(item => item === id),
        1
      );
    }
    setCheckedList(newArray);
  };

  useEffect(()=> {
    props.onChangeAttended(checkedList)
  }, [checkedList])

  const SortableItem = sortableElement(({user}) => 
    <div key={user.id} className={classes.participant}>
      <Grid container >
        <Checkbox
          checked={checkedList.includes(user.id)}
          onChange={()=>handleCheck(user.id)}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Box display="flex" alignItems="center">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
            connected={user.connected}
          >
            {user.image && <Avatar alt="User Image" src={user.image} />}
            {!user.image && <Avatar className={classes.purple}>{user.name?.substring(0, 2)}</Avatar>}
          </StyledBadge>
          <Box ml={2}>
            <Typography variant="h6" color="textPrimary">
              {user.name}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              <span aria-label="a clock blasting off" role="img">⌚</span>{user.watch}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <div>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box mr={1} display="flex" justifyContent="center" alignItems='center'>
            <BatteryChargingFullIcon style={{ color: user.standby ? green[800] : orange[500] }}/>
            &nbsp;
            <Typography align="right" variant="caption" color="textPrimary">  
              {user.battery}%
            </Typography>
          </Box>
          <GenericMoreButton />
        </Box>
      </div>
    </div>
  );

  return (
    <Box mt={3}>
      <Card>

        <CardHeader title="Participants" />

        <Divider />

        <CardContent className={classes.content}>

          <Box display="flex">

          <Checkbox
            checked={checkedList.length === participants.length}
            onChange={handleCheckAll}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
            <div className={classes.item}>
              <Typography variant="h4" color="textPrimary">
                {PARTICIPANTS.length}
              </Typography>
              <Typography variant="overline" color="textSecondary">
                {'Invited'}
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="h4" color="textPrimary">
                {checkedList.length}
              </Typography>
              <Typography variant="overline" color="textSecondary">
                {'Attended'}
              </Typography>
            </div>
              
          </Box>

          <Divider mt={2}/>

          <div className={classes.view}>
            <SortableContainer onSortEnd={onSortEnd}>
              {
                participants.map((user, key) => (
                  <SortableItem key={key} index={key} user={user} />
                ))
              }
            </SortableContainer>

            { participants.length >= count * 5 && <div className={classes.more} onClick={()=>setCount(count + 1)}>
              <ExpandMoreIcon />
            </div>}

          </div>

        </CardContent>
      </Card>
    </Box>
  );
}

Paricipant.propTypes = {
  className: PropTypes.string
};

export default Paricipant;

const StyledBadge = withStyles((theme) => ({
  badge: props => ({
    backgroundColor: UtilService.getOnlineColor(props.connected),
    color: UtilService.getOnlineColor(props.connected),
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  }),
}))(Badge);

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  item: {
    textAlign: 'center',
    flexGrow: 1,
    paddingTop: 13,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  content: {
    padding: 8,
    paddingTop: 0 
  },
  participant: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  more: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    maxHeight: 400,
    overflowY: 'auto'
  }
}));