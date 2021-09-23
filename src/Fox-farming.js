import React from 'react';
import { LabelSeries, Sunburst } from 'react-vis';
import D3FlareData from './data/farming-data.json';

const LABEL_STYLE = {
  fontSize: '12px',
  textAnchor: 'middle'
};

function getKeyPath(node) {
  if (!node.parent) {
    return [];
  }
  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}
function updateData(data, keyPath) {
  if (data.children) {
    data.children.map((child) => updateData(child, keyPath));
  }
  if (!data.hex) {
    data.style = {
      fill: ('#fff', '#939597', '#a0daa9', '#CFC486', '#645637')
    };
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
  };
  return data;
}

const decoratedData = updateData(D3FlareData, false);

export default class FoxFarming extends React.Component {
  state = {
    pathValue: false,
    data: decoratedData,
    finalValue: 'SUNBURST',
    clicked: false
  };

  render() {
    const { clicked, data, finalValue, pathValue } = this.state;
    return (
      <div className="sunburst-wrapper">
        <div className="sunburst-inner-wrapper">
          <Sunburst
            animation
            className="sunburst-farming"
            hideRootNode
            onValueMouseOver={(node) => {
              if (clicked) {
                return;
              }
              const path = getKeyPath(node).reverse();
              const pathAsMap = path.reduce((res, row) => {
                res[row] = true;
                return res;
              }, {});
              this.setState({
                finalValue: path[path.length - 1],
                pathValue: path.join(' > '),
                data: updateData(decoratedData, pathAsMap)
              });
            }}
            onValueMouseOut={() =>
              clicked
                ? () => {}
                : this.setState({
                    pathValue: false,
                    finalValue: false,
                    data: updateData(decoratedData, false)
                  })
            }
            onValueClick={() => this.setState({ clicked: !clicked })}
            style={{
              stroke: '#ddd',
              strokeOpacity: 0.3,
              strokeWidth: '0.5'
            }}
            colorType="literal"
            getSize={(d) => d.value}
            getColor={(d) => d.hex}
            data={data}
            height={300}
            width={350}
          >
            {finalValue && (
              <LabelSeries
                data={[{ x: 0, y: 0, label: finalValue, style: LABEL_STYLE }]}
              />
            )}
          </Sunburst>
        </div>
        <div className="path-name">{pathValue}</div>
        <div className="diagram-info">
          {clicked ? ' click to unlock selection' : `click to lock selection`}
        </div>
      </div>
    );
  }
}
