import React, { useState, useEffect, useCallback, useRef } from 'react';
import Chart from 'react-apexcharts';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MainDataVisualization2(props) {

  const isMountedRef = useIsMountedRef();
  const [data, setData] = useState([]);
  const timerToClearSomewhere = useRef(null) //now you can pass timer to another component

  const getData = useCallback(() => {
    if (isMountedRef.current) {
      setData((prevData) => {
        const newData = [...prevData];
        return newData;
      });
    }

    setTimeout(() => {
      if (isMountedRef.current) {
        setData((prevData) => {
          const newData = [...prevData];
          const random = getRandomInt(0, 100);
          newData.push([new Date().getTime(), random / 10]);
          return newData;
        });
      }
    }, 500);
  }, [isMountedRef]);

  useEffect(() => {
    if(props.status === 'LIVE') {
      timerToClearSomewhere.current = setInterval(() => getData(), 1000);
      return () => {
        clearTimeout(timerToClearSomewhere.current)
      }
    } else if(props.status === 'STOPPED' || props.status === 'COMPLETED'){
      setData([]);
    }

  }, [getData, props.status]);

  return (
    <Card>
      <CardHeader title="Main Data Visualization" />
      <Divider />
      <CardContent>
    <div id="chart">
      <div id="chart-timeline">
        <Chart options={options} series={[{ data }]} type="area" height={450} />
      </div>
    </div>
    </CardContent>
    </Card>
  )

}

export default MainDataVisualization2;

const options = {
  chart: {
    id: 'area-datetime',
    type: 'area',
    height: 350,
    zoom: {
      autoScaleYaxis: true
    },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    }
  },
  annotations: {
    yaxis: [{
      y: 30,
      borderColor: '#999',
      label: {
        show: true,
        text: 'Support',
        style: {
          color: "#fff",
          background: '#00E396'
        }
      }
    }],
    xaxis: [{
      x: new Date().getTime(),
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Rally',
        style: {
          color: "#fff",
          background: '#775DD0'
        }
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  stroke: {
    width: 2,
    curve: 'smooth',
    // lineCap: 'butt',
    // dashArray: [0, 3]
  },
  xaxis: {
    type: 'datetime',
    min: new Date().getTime(),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
}