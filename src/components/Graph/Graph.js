import React from 'react';
// import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
// import { AxisLeft, AxisBottom } from '@visx/axis';


// We'll use some mock data from `@visx/mock-data` for this.
// const data = letterFrequency;
// const data = props.data;
// const data = props.weatherForecast;

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 40, right: 40 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.weather.dateString;
const y = d => d.weather.highTemp * 2;

// And then scale the graph by our data
// const xScale = scaleBand({
//   range: [0, xMax],
//   round: true,
//   domain: data.map(x),
//   padding: 0.4,
// });
// const yScale = scaleLinear({
//   range: [yMax, 0],
//   round: true,
//   domain: [0, Math.max(...data.map(y))],
// });

// // Compose together the scale and accessor functions to get point functions
// const compose = (scale, accessor) => data => scale(accessor(data));
// const xPoint = compose(xScale, x);
// const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG
function Graph(props) {
  props.data && props.data.map(data => {
    return (
      <svg width={width} height={height}>
        {data.map((d, i) => {
          return (
            <Group key={`bar-${i}`}>
              <Bar
                data={d}
                x={x}
                y={yMax}
                height={yMax}
                width={xMax}
                fill="#fc2e1c"
              />
            </Group>
          );
        })}
      </svg>
    );
  });
}


export default Graph
