import React from 'react'
import { useState, useEffect } from 'react';
import UtilService from 'src/utils/service';
import { Typography } from '@material-ui/core';

const Timer = (props) => {
    const {initialMinute = 0, initialSeconds = 0, initialHour = 0, initialDay = 0} = props;
    const [ days, setDays ] = useState(initialDay);
    const [ hours, setHours ] = useState(initialHour);
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [ seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
      let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
              if (minutes === 0) {
                if(hours === 0) {
                  if (days === 0) {
                    clearInterval(myInterval)
                  } else {
                    setDays(days - 1);
                    setHours(23);
                    setMinutes(59);
                    setSeconds(59);
                  }
                } else {
                  setHours(hours - 1);
                  setMinutes(59);
                  setSeconds(59);
                }
              } else {
                setMinutes(minutes - 1);
                setSeconds(59);
              }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="caption"
          >
            {UtilService.padWithZero(days)}:{UtilService.padWithZero(hours)}:{UtilService.padWithZero(minutes)}:{UtilService.padWithZero(seconds)}
          </Typography>
        </div>
    )
}

export default Timer;