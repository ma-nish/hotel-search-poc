import React from 'react'

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FunctionComponent<CounterDisplayProps> = ({ count }) => {
  return (
    <div className='count'>{count}</div>
  );
}

export default CounterDisplay;