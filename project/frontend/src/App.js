import React, { useState, useEffect } from 'react';
import StationSelector from './components/StationSelector';
import TrainArrivalList from './components/TrainArrivalList';
import ErrorMessage from './components/ErrorMessage';


const App = () => {
  // Set default state values
  const [selectedStation, setSelectedStation] = useState(null);
  const [trainArrivals, setTrainArrivals] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to fetch train arrival data
  const fetchTrainArrivals = async (stationCode) => {
    try {
      // Would usually put the URL into an env variable
      const response = await fetch(`http://localhost:8000/api/train/arrival?stationCode=${stationCode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch train arrival data');
      }
      const data = await response.json();

      setTrainArrivals(data); // Set new data
      setErrorMessage(''); // Clears error message since there is no error here
    } catch (error) {
      setTrainArrivals([]);
      setErrorMessage(error.message);
    }
  };

  // useEffect hook to fetch train arrivals data when selected station changes
  useEffect(() => {
    if (selectedStation) {
      fetchTrainArrivals(selectedStation);
    }
  }, [selectedStation]);
  return (
    <div>
      <h1>Train Arrival Data</h1>
      <StationSelector onSelectStation={setSelectedStation} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <TrainArrivalList trainArrivals={trainArrivals} />
    </div>
  );
};

export default App;