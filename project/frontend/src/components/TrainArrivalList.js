import React from 'react';
import TrainArrivalItem from './TrainArrivalItem';

const TrainArrivalList = ({ trainArrivals }) => {
  return (
    <div>
      <h2>Train Arrivals</h2>
      <ul>
        {trainArrivals.map(train => (
            // Needs unique key to resolve child key prop warning
          <TrainArrivalItem train={train} />
        ))}
      </ul>
    </div>
  );
};

export default TrainArrivalList;
