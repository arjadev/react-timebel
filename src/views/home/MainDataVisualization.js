import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme
} from '@material-ui/core';
import Chart from 'react-apexcharts';

function MainDataVisualization({ className, ...rest }) {
  const theme = useTheme();

  const chart = {
    options: {
      chart: {
        background: theme.palette.background.paper,
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: false
      },
      colors: ['#1f87e6', '#ff5c7c'],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: theme.palette.divider,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        labels: {
          colors: theme.palette.text.secondary
        }
      },
      markers: {
        size: 4,
        strokeColors: ['#1f87e6', '#27c6db'],
        strokeWidth: 0,
        shape: 'circle',
        radius: 2,
        hover: {
          size: undefined,
          sizeOffset: 2
        }
      },
      stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'butt',
        dashArray: [0, 3]
      },
      theme: {
        mode: theme.palette.type
      },
      tooltip: {
        theme: theme.palette.type
      },
      xaxis: {
        axisBorder: {
          color: theme.palette.divider
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider
        },
        categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: [
        {
          axisBorder: {
            show: true,
            color: theme.palette.divider
          },
          axisTicks: {
            show: true,
            color: theme.palette.divider
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          }
        },
        {
          axisTicks: {
            show: true,
            color: theme.palette.divider
          },
          axisBorder: {
            show: true,
            color: theme.palette.divider
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          },
          opposite: true
        }
      ]
    },
    series: [
      {
        name: 'Marker1',
        data: [3.2, 3.4, 3.5, 3.6, 6.7, 6.8, 7.2, 7.5, 8.2, 7.6, 7.4, 6.3, 6.3, 6.1, 5.3, 5.1, 3.5, 3.2, 2.0, 1.3, 1.6, 1.9, 2.6]
      },
      {
        name: 'Marker2',
        data: [3.5, 4.1, 6.2, 4.2, 1.3, 1.8, 2.9, 3.7, 3.6, 5.1, 3.2, 3.5, 3.2, 3.4, 3.5, 3.6, 4.1, 4.5, 5.4, 6.6, 2.3, 2.1, 1.2]
      }
    ]
  };
  return (
    <Card>
      <CardHeader title="Main Data Visualization" />
      <Divider />
      <CardContent>
        <Box mt={2}>
          <Chart
            type="line"
            height="410"
            {...chart}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

MainDataVisualization.propTypes = {
  className: PropTypes.string
};

export default MainDataVisualization;
