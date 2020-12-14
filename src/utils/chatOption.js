export const ChatOption1 = {
  chart: {
    id: 'area-datetime',
    // type: 'area',
    height: 350,
    zoom: {
      autoScaleYaxis: true
    },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 2000
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
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shadeIntensity: 1,
  //     opacityFrom: 0.7,
  //     opacityTo: 0.9,
  //     stops: [0, 100]
  //   }
  // },
  // colors: ["#b71c1c", "#880e4f", "#4a148c", "#c62828", "#ad1457", "#6a1b9a", "#d32f2f", "#c2185b", "#7b1fa2", "#e53935"]
}

export const ChatOption2 = {
  chart: {
    id: 'area-datetime',
    // type: 'area',
    height: 350,
    zoom: {
      autoScaleYaxis: true
    },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 2000
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
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shadeIntensity: 1,
  //     opacityFrom: 0.7,
  //     opacityTo: 0.9,
  //     stops: [0, 100]
  //   }
  // },
  // colors: ["#f9a825"]
}

export const ChatOption3 = {
  chart: {
    id: 'area-datetime',
    // type: 'area',
    height: 350,
    zoom: {
      autoScaleYaxis: true
    },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 2000
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
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shadeIntensity: 1,
  //     opacityFrom: 0.7,
  //     opacityTo: 0.9,
  //     stops: [0, 100]
  //   }
  // },
  // colors: ["#039be5"]
}