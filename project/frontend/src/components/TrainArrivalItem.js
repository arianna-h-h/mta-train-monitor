import React from 'react';

const TrainArrivalItem = ({ train }) => {
  return (
    <li>
      {/* Write logic to only display sting "minutes" if arrival time is a number */}
      <strong>{train.destination}</strong> - {train.arrivalTime} minutes
    </li>
  );
};

export default TrainArrivalItem;
