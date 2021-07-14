import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  DiscreteColorLegend,
  LineMarkSeries
} from 'react-vis';

const numeral = require('numeral');

const data = [
  [1998, 2945083, 485068],
  [1999, 1053808, 511073],
  [2000, 1368295, 597847],
  [2001, 1657412, 444231],
  [2002, 663035, 599739],
  [2003, 498721, 462002],
  [2004, 77324, 286489],
  [2005, 303969, 368775],
  [2006, 621401, 576677],
  [2007, 526815, 261699],
  [2008, 453034, 19851],
  [2009, 803311, 188556],
  [2010, 1957807, 145440],
  [2011, 745004, 150244],
  [2012, 931881, 94418],
  [2013, 795803, 82059],
  [2014, 508990, 53276],
  [2015, 329535, 86473],
  [2016, 81672, 61001],
  [2017, 67745, 62599],
  [2018, 149101, 68026],
  [2019, 4907, 15276]
];

const axisProps = {
  tickSizeInner: 0,
  style: { line: { stroke: '#141c25', strokeWidth: '1px' } }
};

function FoxEconomy() {
  const series = [2, 1].map((i) => data.map((d) => ({ x: d[0], y: d[i] })));
  return (
    <div className="legend-economy">
      <DiscreteColorLegend
        items={['import', 'export']}
        orientation="horizontal"
        className="expl-economy"
      />
      <XYPlot width={500} height={300} yDomain={[0, 3000000]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis {...axisProps} tickFormat={String} />
        <YAxis {...axisProps} tickFormat={(d) => numeral(d).format('0.0a')} />

        {series.map((d, i) => (
          <LineMarkSeries
            fill="style"
            opacity={0.9}
            style={{ fill: '#fafafa' }}
            key={i}
            size={3}
            data={d}
          />
        ))}
      </XYPlot>

    </div>
  );
}

export default FoxEconomy;
