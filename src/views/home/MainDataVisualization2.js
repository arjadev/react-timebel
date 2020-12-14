import React, { useState, useEffect, useCallback, useRef } from 'react';
import Chart from 'react-apexcharts';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Card, CardContent, CardHeader, Divider, Box, TextField, FormControlLabel, Checkbox, makeStyles, FormControl, ListItemText, MenuItem, Select, InputLabel, Input } from '@material-ui/core';
import UtilService from 'src/utils/service';
import {ChatOption1, ChatOption2, ChatOption3} from '../../utils/chatOption';

function MainDataVisualization2(props) {
  const classes = useStyles();

  const isMountedRef = useIsMountedRef();
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    availability: null,
    config: 'heart',
    inStock: null,
    isShippable: null
  });
  const [personName, setPersonName] = useState([]);

  const timerToClearSomewhere = useRef(null) 

  const getData = useCallback((attenders) => {
    setTimeout(() => {
      if (isMountedRef.current) {
        setData((prevData) => {
          return attenders.map(user=>{
            const randomScore = UtilService.getRandomInt(0, 100);
            const randomHeart = UtilService.getRandomInt(60, 90);
            const randomSafety = UtilService.getRandomInt(12, 18);
            const userData=prevData.find(item=>item.id === user.id);
            const newData={
              ...userData,
              id: user.id,
              name: user.name,
              scores:[
                ...userData?.scores||[],
                [new Date().getTime(), randomScore / 10]
              ],
              hearts:[
                ...userData?.hearts||[],
                [new Date().getTime(), randomHeart]
              ],
              safety:[
                ...userData?.safety||[],
                [new Date().getTime(), randomSafety]
              ]
            }
            return newData;
          })
        });
      }
    }, 500);
  }, [isMountedRef]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value
    }));
  };

  const handleConfigChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      config: value
    }));
  };

  const handleStockChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      inStock: value
    }));
  };

  const handleShippableChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      isShippable: value
    }));
  };

  useEffect(() => {
    if(props.status === 'LIVE') {
      timerToClearSomewhere.current = setInterval(() => getData(props.attenders), 2000);
      return () => {
        clearTimeout(timerToClearSomewhere.current)
      }
    } else if(props.status === 'STOPPED' || props.status === 'COMPLETED'){
      setData([]);
    }

  }, [getData, props.status, props.attenders]);

  return (
    <Card>
      <CardHeader title="Main Data Visualization" />
      <Divider />
      <Box mt={3} display="flex" alignItems="center" ml={3} mb={3}>
        <TextField
          className={classes.categoryField}
          label="Default View"
          name="category"
          onChange={handleCategoryChange}
          select
          multiple
          SelectProps={{ native: true }}
          value={filters.category || 'all'}
        >
          {categoryOptions.map((categoryOption) => (
            <option
              key={categoryOption.id}
              value={categoryOption.id}
            >
              {categoryOption.name}
            </option>
          ))}
        </TextField>
        {filters.category === 'single' && props.attenders.length > 0 && <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Attenders</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(e) => <>{e.length + ' selected'}</>}
            MenuProps={MenuProps}
          >
            {props.attenders.map((u) => (
              <MenuItem key={u.id} value={u.name}>
                <Checkbox checked={personName.indexOf(u.name) > -1} />
                <ListItemText primary={u.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>}
        <TextField
          className={classes.availabilityField}
          label="Type"
          name="availability"
          onChange={handleConfigChange}
          select
          SelectProps={{ native: true }}
          value={filters.config || 'all'}
        >
          {configOptions.map((configOption) => (
            <option
              key={configOption.id}
              value={configOption.id}
            >
              {configOption.name}
            </option>
          ))}
        </TextField>
        <Box display='flex' flexDirection="column">
          <FormControlLabel
            className={classes.stockField}
            control={(
              <Checkbox
                checked={!!filters.inStock}
                onChange={handleStockChange}
                name="inStock"
                size='small'
              />
            )}
            label="Moderated"
          />
          <FormControlLabel
            className={classes.shippableField}
            control={(
              <Checkbox
                checked={!!filters.isShippable}
                onChange={handleShippableChange}
                name="Shippable"
                size='small'
              />
            )}
            label="ASYNC"
          />
        </Box>
      </Box>
      <Divider />
      <CardContent>
        <div id="chart">
          <div id="chart-timeline">
            { filters.config === 'heart' && <Chart 
              options={ChatOption1} height={450}
              series={data.filter(u=>personName.indexOf(u?.name) > -1 || filters.category === 'all').map(item=> ({name: item?.name, data: item?.hearts}))}
            />}
            { filters.config === 'score' && <Chart 
              options={ChatOption2} height={450}
              series={data.filter(u=>personName.indexOf(u?.name) > -1 || filters.category === 'all').map(item=> ({name: item?.name, data: item?.scores}))}
            />}
            { filters.config === 'safety' && <Chart 
              options={ChatOption3} height={450}
              series={data.filter(u=>personName.indexOf(u?.name) > -1 || filters.category === 'all').map(item=> ({name: item?.name, data: item?.safety}))}
            />}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MainDataVisualization2;

const categoryOptions = [
  {
    id: 'all',
    name: 'All Participants'
  },
  {
    id: 'single',
    name: 'By Participant'
  }
];

const configOptions = [
  {
    id: 'heart',
    name: 'Heart Rate'
  },
  {
    id: 'score',
    name: 'Immersion Score'
  },
  {
    id: 'safety',
    name: 'Safety Value'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {},
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  queryField: {
    width: 500
  },
  categoryField: {
    flexBasis: 200
  },
  availabilityField: {
    marginLeft: theme.spacing(2),
    flexBasis: 200
  },
  stockField: {
    marginLeft: theme.spacing(2)
  },
  shippableField: {
    marginLeft: theme.spacing(2)
  },
  imageCell: {
    fontSize: 0,
    width: 68,
    flexBasis: 68,
    flexGrow: 0,
    flexShrink: 0
  },
  image: {
    height: 68,
    width: 68
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    flexBasis: 200
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  variant: "menu",
  getContentAnchorEl: null
};