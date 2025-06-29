import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularGauge = () => {
  const value = 70; // 70% progress

  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: '#00C49F',
          textColor: '#ffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#f8f8f8',
        })}
      />
    </div>
  );
};

export default CircularGauge;
